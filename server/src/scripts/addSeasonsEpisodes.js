const database = require("../services/database");
const Season = require("../models/season");
const Episode = require("../models/episode");
const { startSession } = require("../models/season");

const addSeasonsEpisode = async () => {
  try {
    const series = await Movie.find({ type: 'serie' }).select('_id');
    
    for (let serie of series) {
      console.log(`FILME ${serie}-------`);
      const seasonsNum = Math.floor(Math.random() * 5) + 1;
      
      for (let i = 1; i <= seasonsNum; i++) {
        console.log(`Inserindo temporada ${i} de ${seasonsNum}`);
        const season = await new Season({
          movie_id: serie,
          title: `Temporada ${i}`
        }).save();

        const episodesNum = Math.floor(Math.random() * 5) + 1;
        for (let x = 1; x <= episodesNum; x++) {
          
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};

addSeasonsEpisode();