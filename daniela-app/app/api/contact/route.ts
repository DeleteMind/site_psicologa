import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        // Get data from the request body
        const { firstName, lastName, email, phone,  message } = await req.json();


        // Combine first and last name
        const name = `${firstName} ${lastName}`;
        
        // Access environment variables
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpSecure = process.env.SMTP_SECURE === 'true';  // Convert to boolean
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const contactEmail = process.env.CONTACT_EMAIL;

        // Log environment variables to ensure they are loaded correctly
        

        // Create a transporter object using the environment variables
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: Number(smtpPort),
            secure: smtpSecure,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // Prepare the email message
        const mailOptions = {
            from: smtpUser,
            to: contactEmail,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: (error as Error).message }), { status: 500 });
    }
}
