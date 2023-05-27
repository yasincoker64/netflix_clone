function togglePopup(popupId, titleElement) {
  const popupElement = document.getElementById(popupId);

  const articles = document.getElementsByClassName('content-faq-article');
  const titlesWithIcon = document.getElementsByClassName('content-faq-title');
  
  for (let i = 0; i < articles.length; i++) {
    const currentArticle = articles[i];
    const currentTitleWithIcon = titlesWithIcon[i];
    
    if (currentArticle.id === popupId) {
      currentArticle.classList.toggle('show');
      currentTitleWithIcon.classList.toggle('open');
    } else {
      currentArticle.classList.remove('show');
      currentTitleWithIcon.classList.remove('open');
    }
  }
  
  titleElement.classList.toggle('open');
}