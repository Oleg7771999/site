export default function handler(req, res) {
  res.status(200).json({
    main_contact: "https://t.me/your_admin",
    vpn_site: "https://example.com",
    tor_site: "http://exampletor.onion",
    bot1: "https://t.me/bot1",
    bot2: "https://t.me/bot2",
    public_chat: "https://t.me/publicchat"
  });
}
