window.onload = function () {
    /**
     * On récuperes tout les élement DOM nécessaire
     */
    // l'element du plateau
    var boardElement = document.getElementById("board");
    
    /**
     * Initialization de l'object `board`
    */
   var board = Object.create(Board)
   board.create(boardElement)
   
   /**
    * On gere l'événement de submission du formulaire
   */
  document.getElementById("formulaire").addEventListener("submit", function (event) {
      event.preventDefault();
        // les élément du formulaire
        var selectType = document.getElementById("select-type");
        var selectColor = document.getElementById("select-color");
        var selectSpeed = document.getElementById("select-speed");
        var options = selectType.options[selectType.selectedIndex];
        var filename = options.getAttribute("data-filename");
        

        if(!board.canStart()) {
            
        }
    }
}