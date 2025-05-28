<script setup lang="ts">
</script>

<template>
  <div class="movie-page">
    <div class="movie-image">
      <img class="poster" src="../../images/Rorlino.jpg" alt="Rorlino">
    </div>

    <div class="movie-content">
      <h1 class="title">Rorlino (2019)</h1>

      <div class="genre">
        <img class="fsk-icon" src="../../images/16icon.png" alt="16">
        <span>Science Fiction, Adventure</span>
      </div>

      <section class="movie-description">
        <h2 class="subtitle">To the Horizon</h2>
        <h2 class="subtitle">Overview</h2>
        <p class="description">
          Malik Johnson was born on March 14, 1991. He is an American actor and former dancer. Before transitioning to acting, he performed with several urban dance crews and was featured in national commercials for athletic brands. On television, he is best known for his breakout role as Jaylen Carter in the critically acclaimed sci-fi drama Horizon, and for his recurring role as Officer Trey Collins on the NBC series Metro Blue. He also appeared in the Netflix thriller Echoes in the Fog and guest-starred in episodes of Chicago P.D. and All American. On film, Johnson played supporting roles in the indie drama South End Summer and the action-thriller Iron Pulse. In 2024, he joined the cast of the HBO Max series Lucid State as tech-savvy activist Miles Grant.
        </p>
      </section>

      <section class="ratings">
        <div class="rating-column">
          <div><strong>Rotten Tomatoes:</strong> 7/10</div>
          <div><strong>IMDB:</strong> 9/10</div>
        </div>
        <div class="rating-column">
          <div><strong>Metacritic:</strong> 9/10</div>
          <div><strong>Letterboxd:</strong> 8/10</div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.movie-page {
  display: flex;
  flex-direction: row;
  background-color: #181818;
  padding: 50px 30px;
  color: white;
}

.movie-image .poster {
  height: 600px;
}

.movie-content {
  margin-left: 80px;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30px;
  margin-bottom: 10px;
}

.genre {
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.fsk-icon {
  height: 24px;
}

.movie-description {
  margin-top: 2rem;
}

.subtitle {
  font-size: 20px;
  margin-top: 1rem;
}

.description {
  font-size: 13px;
  margin-top: 0.5rem;
  line-height: 1.5;
}

.ratings {
  display: flex;
  gap: 50px;
  margin-top: 30px;
  font-size: 20px;
}

.rating-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
