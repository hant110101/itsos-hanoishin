import accountRouters from "./account";
import tourGuideRouters from "./tourGuide";

export default function routes(app) {
  app.get("/account", (req, res) => {
    res.render("account.hbs", {
      title: "Hanoi Shin",
    });
  });

  app.get("/tourGuide", (req, res) => {
    res.render("tourGuide.hbs", {
      title: "Tour Guide",
    });
  });
}

export { accountRouters, tourGuideRouters };
