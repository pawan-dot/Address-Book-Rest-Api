import { Contact } from "../models/contacts.js"

//add contact
export const createContact = async (req, res) => {

    try {
        // if Bulk  contact
        if (typeof (req.body) === 'object') {
            const bulkContact = (req.body)

            let contacts = []
            for (let i = 0; i < bulkContact.length; i++) {
                const { name, email, phone, address } = bulkContact[i];
                let contact = await Contact.findOne({ email });
                if (contact) {
                    return res
                        .status(400)
                        .json({ success: false, message: ` contact email: ${email} already exists` });
                }

                let data = await Contact.create({
                    name,
                    email,
                    phone,
                    address

                });
                contacts.push(data)

            }
            return res.status(201).json({
                success: true,
                msg: "Bulk Contact create Successfully!!",
                contacts,
            });
        }

        //if only single contact
        const { name, email, phone, address } = req.body;
        let contact = await Contact.findOne({ email });
        if (contact) {
            return res
                .status(400)
                .json({ success: false, message: ` contact email: ${email} already exists` });
        }
        const data = await Contact.create({
            name,
            email,
            phone,
            address

        });
        res.status(201).json({
            success: true,
            msg: " create Contact Successfully!!",
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

//get All contact
export const getAllcontact = async (req, res) => {

    try {
        //appy api feature(search,pagination,limit)
        const currentPage = parseInt(req.query.page) - 1 || 0;
        const resultPerPage = parseInt(req.query.limit) || 5;
        const search = req.query.keyword || "";
        //find contact with condition
        const contact = await Contact.find({ name: { $regex: search, $options: "i" } })
            .sort({ createdAt: -1 })
            .skip(currentPage * resultPerPage)
            .limit(resultPerPage);

        const totalContacts = await Contact.countDocuments({
            name: { $regex: search, $options: "i" },// searching from name,case insensitive
        });
        //send response
        res.status(200).json({
            success: true,
            totalContacts,
            currentPage: currentPage + 1,
            resultPerPage,
            contact,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};
//get single contact
export const getSinglecontact = async (req, res) => {

    try {
        if (!(req.params.id)) {
            return res.status(404).json({ message: 'Please provide Contact ID' });
        }
        const contact = await Contact.findOne(req.param.id)

        res.status(200).json({
            success: true,
            contact,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};
// 3.update contact
export const updateContact = async (req, res) => {
    try {
        if (!(req.params.id)) {
            return res.status(404).json({ message: 'Please provide Contact ID' });
        }
        const newContactData = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
        };
        //modify contact
        const ModifyContact = await Contact.findByIdAndUpdate(req.params.id, newContactData,
            { new: true }
        );

        res.status(200).json({
            success: true,
            ModifyContact
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

//delete contact
export const deleteContact = async (req, res) => {

    try {
        //find contact and delete
        const contact = await Contact.findByIdAndDelete(req.params.id)
        if (!contact) {
            return res.status(404).json({ message: 'contact Not Found' });
        }
        //delete conctact
        await contact.remove();
        res.status(200).json({
            success: true,
            msg: "contact Deleted Successfully!!",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};
