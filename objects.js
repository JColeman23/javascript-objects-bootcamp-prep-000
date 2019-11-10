var playlist = {Cream: 'White Room'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, aristName){
  delete playlist.aristName
  return playlist
}