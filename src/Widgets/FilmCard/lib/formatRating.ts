const formatVotes = (votes : number) => {
    if (votes >= 1000000) return (votes / 1000000).toFixed(1) + 'M';
    if (votes >= 1000) return (votes / 1000).toFixed(1) + 'K';
    return votes;
  };


export { formatVotes }