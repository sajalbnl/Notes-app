//home

exports.homepage = async (req, res) => {
  const locals = {
    title: "nodeJs",
    description: "NodesJs notes app",
  };
  res.render("index", { locals, layout: "../views/layouts/front-page" });
};

//about
exports.about = async (req, res) => {
  const locals = {
    title: "about-nodeJs",
    description: "NodesJs notes app",
  };
  res.render("about", { locals });
};
