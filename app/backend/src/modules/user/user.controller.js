import { getAllUser } from "./user.model";

export async function users(req, res) {
    const users = await getAllUser();
    return res.status(200).json({
        status: true,
        message: "success",
        data: users || []
    });
}