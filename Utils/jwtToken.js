// Create Token and saving in cookie

export const sendToken = (user, statusCode, res) => {
    const token = user.generateToken();

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + 90 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        token,
    });
};