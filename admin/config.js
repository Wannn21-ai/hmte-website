window.CMS_MANUAL_INIT = true;

const config = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  publish_mode: "simple",
  media_folder: "assets/img/uploads",
  public_folder: "/assets/img/uploads",
  collections: [],
};

window.CMS.init({ config });
