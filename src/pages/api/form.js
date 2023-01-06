export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body;

    if (!body.name || !body.email || !body.message) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: "Required fields are not found" });
    }

    const SibApiV3Sdk = require("sib-api-v3-sdk");
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
        to: [
            {
                name: process.env.SENDINBLUE_TO_NAME,
                email: process.env.SENDINBLUE_TO_EMAIL,
            },
        ],
        replyTo: {
            email: body.email,
            name: body.name,
        },
        templateId: 1,
        params: {
            name: body.name,
            email: body.email,
            phone: body.phone,
            message: body.message,
        },
        headers: {
            "api-key": apiKey.apiKey,
            "content-type": "application/json",
            accept: "application/json",
        },
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
        function (data) {
            console.log("API called successfully. Returned data: " + data);
            res.redirect(302, "/obrigado");
        },
        function (error) {
            console.error(error);
            res.redirect(302, "/contato");
        }
    );

    // Sends a HTTP success code
    // res.status(200).json({ data: `${body.first} ${body.last}` });
}
