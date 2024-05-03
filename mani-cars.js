var voiture = {
    type: null,
    couleur: null,
    vitesse: null,
    file: null,
    top: 0,
    left: 0,
    element: null,
  
    create: function(type, couleur, vitesse, element) {
      this.type = type;
      this.couleur = couleur;
      this.vitesse = vitesse;
      this.file = "images/" + type + ".png";
      this.element = element
    }
  };