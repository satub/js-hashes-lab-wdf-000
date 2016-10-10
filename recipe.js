'use strict';

function addIngredient(resepti, aines, tarvitaan){
  resepti[aines] = tarvitaan;
  return resepti;
}

function removeIngredient(resepti, aines){
  delete resepti[aines];
  return resepti;
}

function updateIngredient(resepti, aines, tarvitaan){
  resepti[aines] = tarvitaan;
  return resepti;
}

function readRecipe(resepti){
  for (var aines in resepti){
    console.log("this recipe calls for " + resepti[aines] + " of " + aines);
  }
}
