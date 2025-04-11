import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        // Get data from the request body
        const { Name,  email, phone, message } = await req.json();

        // Combine first and last name
        const name = `${Name}`;

        // Access environment variables
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpSecure = process.env.SMTP_SECURE === 'true';  // Convert to boolean
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const contactEmail = process.env.CONTACT_EMAIL;

        // Log environment variables to ensure they are loaded correctly
console.log('SMTP_HOST:', smtpHost);
        console.log('SMTP_PORT:', smtpPort);
        console.log('SMTP_SECURE:', smtpSecure);
        console.log('SMTP_USER:', smtpUser);
        console.log('SMTP_PASS:', smtpPass);
        console.log('CONTACT_EMAIL:', contactEmail);        

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
            from: name,
            to: contactEmail,
            subject: `Contacto do site ${name}`,
            text: `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nMessagem: ${message}`,
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
