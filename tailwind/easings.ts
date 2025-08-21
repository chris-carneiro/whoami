export const easings = {
  // Base déjà définies
  in: "cubic-bezier(0.8, 0, 1, 1)",       // ease-in standard
  out: "cubic-bezier(0, 0, 0.2, 1)",      // ease-out standard

  // Variantes supplémentaires
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",  // ease-in-out classique
  linear: "cubic-bezier(0, 0, 1, 1)",     // progression constante

  // Plus rapides / plus douces
  inSoft: "cubic-bezier(0.55, 0, 0.55, 0.2)",   // entrée douce, accélère vite
  outSoft: "cubic-bezier(0.25, 0.8, 0.25, 1)",  // sortie douce, ralentit tard
  inOutSoft: "cubic-bezier(0.45, 0, 0.55, 1)",  // lissé des deux côtés

  // Versions plus extrêmes
  inStrong: "cubic-bezier(0.7, 0, 0.84, 0)",    // démarre lentement, part d’un coup
  outStrong: "cubic-bezier(0.16, 1, 0.3, 1)",   // ralentit fortement à la fin
  inOutStrong: "cubic-bezier(0.87, 0, 0.13, 1)",// fort au milieu

  // Effet de rebond / ressort léger
  springy: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", // petit rebond
};
