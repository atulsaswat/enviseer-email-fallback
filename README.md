# Enviseer Email Fallback Service

This service provides a fallback email mechanism for the Enviseer contact form when the main API is unavailable.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your SendGrid API key:
   ```bash
   cp .env.example .env
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

- `SENDGRID_API_KEY`: Your SendGrid API key for sending emails
- `PORT`: Server port (optional, defaults to 3000)

## API Endpoints

### POST /api/send-email

Sends an email using SendGrid as a fallback mechanism.

Request body:
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "company": "string",
  "phone": "string",
  "jobTitle": "string"
}
```

## Deployment

This service is deployed on Render. To deploy:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the environment variables in Render's dashboard
4. Deploy!

## Security

- The SendGrid API key is stored securely in environment variables
- CORS is enabled for the Enviseer domain
- No sensitive data is logged or stored 