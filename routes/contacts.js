import express from "express";
import {
    createContact,
    getAllcontact,
    getSinglecontact,
    updateContact,

    deleteContact,

} from "../controllers/contacts.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const contactRouter = express.Router();
//create single and bulk contacts route
contactRouter.route("/contact/new").post(isAuthenticated, createContact);
//get All contacts route(pagination,serch,limit)
contactRouter.route("/contact/getAll").get(isAuthenticated, getAllcontact);
//get single contact route
contactRouter.route("/contact/getOne/:id").get(isAuthenticated, getSinglecontact);
//update contacts route
contactRouter.route("/contact/update/:id").put(isAuthenticated, updateContact);
//delete contact route
contactRouter.route("/contact/delete/:id").delete(isAuthenticated, deleteContact);