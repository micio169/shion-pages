const CLIENT_ID = "YOUR_CLIENT_ID_HERE";
const PERMISSIONS = "2147485696";
const inviteLinks = document.querySelectorAll("[data-invite-link]");

function buildInviteUrl() {
  if (!CLIENT_ID || CLIENT_ID === "YOUR_CLIENT_ID_HERE") {
    return "https://discord.com/oauth2/authorize?client_id=1518059415125889034&permissions=8&integration_type=0&scope=bot+applications.commands";
  }

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    permissions: PERMISSIONS,
    integration_type: "0",
    scope: "bot applications.commands"
  });

  return `https://discord.com/oauth2/authorize?${params.toString()}`;
}

for (const link of inviteLinks) {
  link.href = buildInviteUrl();

  if (CLIENT_ID === "YOUR_CLIENT_ID_HERE") {
    link.target = "_self";
    link.setAttribute("aria-label", "CLIENT_ID 설정 후 초대 링크가 활성화됩니다");
  }
}
