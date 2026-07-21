const getYear = (dateString : string) => {
    return dateString ? dateString.split("-")[0] : 'N/A';
  };

export {getYear}