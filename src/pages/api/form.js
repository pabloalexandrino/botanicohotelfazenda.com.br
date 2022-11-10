export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body;
    return req;

    if (!body.name || !body.email || !body.phone || !body.message) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: "Required fields are not found" });
    }

    const SibApiV3Sdk = require("sib-api-v3-sdk");
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey =
        "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";

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
        to: [
            {
                email: "gerencia@botanicohotelfazenda.com.br.",
                name: "Gerencia Hotel Botânico",
            },
        ],
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
            alert(error);
            res.redirect(302, "/contato");
        }
    );

    // Sends a HTTP success code
    // res.status(200).json({ data: `${body.first} ${body.last}` });
}
