var playlist={artistName: "Coldplay",songTitle: "Lost!"};

function updatePlaylist(playlist,artistName,songTitle){

  return Object.assign({},playlist,{artistName:["Phil Ochs"]},{songTitle:["My Bloody Valentine","Slowdive"]});
}
