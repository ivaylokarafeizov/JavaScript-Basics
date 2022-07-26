function seriesCalculator(input) {
    let seriesName = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let timeNoAds = Number(input[3]);

    let ads = timeNoAds * 0.20;
    let timeWAds = timeNoAds + ads;
    let specialEpisodes = seasons * 10;
    let time = timeWAds * episodes * seasons + specialEpisodes;

    console.log(`Total time needed to watch the ${seriesName} series is ${time} minutes.`);
}

seriesCalculator(["Lucifer", "3", "18", "55"]);