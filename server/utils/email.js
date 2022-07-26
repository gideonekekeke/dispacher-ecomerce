const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const GOOGLE_SECRET = "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";
const GOOGLE_ID =
	"717654860266-4jdicf1esea6bemik2s1duf52dh3tc76.apps.googleusercontent.com";
const GOOGLE_REFRESHTOKEN =
	"1//04Px4yxSiBhMyCgYIARAAGAQSNwF-L9IrrIyoTWoDyjIGyPVkgzSVVSILDZWg4OzXbbcH7B-7bOohKsTPhz1CXZfY-1oDtbpXF4M";
const GOOGLE_REDIRECT = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESHTOKEN });

const DelieveryMail = async (email, opppt) => {
	try {
		const accessToken = await oAuth.getAccessToken();
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				type: "OAuth2",
				user: "d1churchnetwork@gmail.com",
				refreshToken: accessToken.token,
				clientId: GOOGLE_ID,
				clientSecret: GOOGLE_SECRET,
				accessToken: GOOGLE_REFRESHTOKEN,
			},
		});

		const mailOptions = {
			from: "no-reply✉️  <mybread@gmail.com>",
			to: email,
			subject: "Account Verification",
			html: ` <h3>
             your products have been recieved and will be delivered in two days..
			 use this code to get your product from the dispatcher : ${opppt}
        </h3>`,
		};

		const result = transporter.sendMail(mailOptions);
		return result;
	} catch (error) {
		return error;
	}
};

module.exports = {
	DelieveryMail,
};
