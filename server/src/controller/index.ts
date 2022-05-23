import express from "express";
import CalculatorController from "./calculator.routes"

export function RegisterRoutes(app: express.Application) {
    const slack = new CalculatorController(app);
}
