import { connect, set } from "mongoose";
import { UserModel } from "../models/user.model.js";
import { FoodModel } from "../models/food.model.js";
import { sample_users } from "../data.js";
import { sample_foods } from "../data.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const PASSWORD_HASH_SALT_ROUNDS = 10;
set("strictQuery", true);

export const dbconnect = async () => {
  console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line
  if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in environment variables");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await seedUsers();
    await seedFoods();
    console.log("connect successfully---");
  } catch (error) {
    console.log(error);
  }
};

async function seedUsers() {
  const usersCount = await UserModel.countDocuments();
  if (usersCount > 0) {
    console.log("Users seed is already done!");
    return;
  }

  for (let user of sample_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  }

  console.log("Users seed is done!");
}

async function seedFoods() {
  const foods = await FoodModel.countDocuments();
  if (foods > 0) {
    console.log("Foods seed is already done!");
    return;
  }

  // for (const food of sample_foods) {
  //   console.log("Seeding food:", food.name);
  //   food.imageUrl = `/foods/${food.imageUrl}`;
  //   food.weight = food.weight || "Unknown";
  //   await FoodModel.create(food);
  // }
  for (const food of sample_foods) {
    try {
      food.imageUrl = `/foods/${food.imageUrl}`;
    food.weight = food.weight || "Unknown";
      const createdFood = await FoodModel.create(food);
      console.log('Inserted food: ', createdFood.name);  // Log food name after creation
    } catch (error) {
      console.error('Error inserting food:', food.name, error);
    }
  }

  console.log("Foods seed Is Done!");
}
