mixins.home = {
    mounted() {
        let background = this.$refs.homeBackground;
        let images = background.dataset.images.split(",");
        let id = Math.floor(Math.random() * images.length);
        background.style.backgroundImage = `url('${images[id]}')`;
        this.menuColor = true;
        this.initSiteVisitorCounter();
    },
    methods: {
        initSiteVisitorCounter() {
            const counterEl = document.querySelector("#site-visitor-count");
            if (!counterEl || !window.Waline || !Waline.pageviewCount) return;

            const path = counterEl.dataset.path || "/__site_visitors__";
            const serverURL = counterEl.dataset.serverUrl;
            if (!serverURL) return;

            // Count each browser only once for this global site counter path.
            const storageKey = `waline-site-visitor:${path}`;
            const counted = localStorage.getItem(storageKey) === "1";

            Waline.pageviewCount({
                serverURL,
                path,
                selector: "#site-visitor-count",
                update: !counted,
            });

            if (!counted) localStorage.setItem(storageKey, "1");
        },
        homeClick() {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        },
    },
};
