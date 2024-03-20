const AppConfig = {
    version: "0.0.1",
    metadata: {
        title: "Great Comcat Engineering",
        description: "Website for Great Comcat Engineering",
        url: "https://www.greatcomcatengineering.com",
        backgroundColor: "#1e293b",
        themeColor: "#1e293b",
    },
    navbarUrl: "",
    assets: {
        icons: []
    },
    apiEndpoints: {
        dev: "https://api.greatcomcatengineering.com",
        qa: "https://api.greatcomcatengineering.com",
        prod: "https://api.greatcomcatengineering.com",
    },
    localStorageKeys: {
        theme: "gce-theme",
        language: "gce-language",
    },
}

export default AppConfig;