import React from 'react'

function FavouritesButton(props) {
    const {gameId, gameTitle, onToggleFavorite} = props
  return (
    <div>
        <iconButton><i class="bi bi-hand-thumbs-up-fill"></i></iconButton>
        
    </div>
  )
}

export default FavouritesButton