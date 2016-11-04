import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body, input, button {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body {
    padding: 20px;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .gallery {
    width: 930px;
    /* max-width: 930px; */
    /* min-width: 700px; */
    margin: 0 auto;
  }

  .gallery__navigation {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
  .gallery__navigation > * {
    flex 0 0 auto;
    text-align: center;
    color: #4684ad;
    cursor: pointer;
    font-size: 16px;
    padding-left: 5px;
    padding-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
  }
  .gallery__navigation > *.is-empty {
    color: #ccc;
  }
  .gallery__navigation > *.is-active {
    color: black;
  }

  .gallery__body {
    background-color: #fff;
    padding: 15px 10px; 
    /* border: 1px solid #ddd; */
  }
  
  .gallery__images {
    display: flex;
    flex-wrap: wrap;
    /* width: 100%; */
    max-height: 400px;
    overflow-y: auto;
    margin-left: -5px;
    margin-right: -5px;
  }
    .gallery__images:not(:last-child) {
      margin-bottom: 15px;
    }

  .gallery__upload {
    width: 100%;
  }
  .gallery-upload {
    width: 100%;
    height: 110px;
    padding: 10px;
    background-color: #f2f7fa;
    border: 1px solid #bdcbcc;
    transition: all;
    display: flex;
  }
    .gallery-upload:hover {
      opacity: 0.8;
    }
    .gallery-upload__input {
      display: none;
    }
    .gallery-upload__action {
      display: inline-block;
      text-align: center;
      cursor: pointer;
      display: block;
      text-align: center;
      outline: none;
      width: 100%;
      line-height: 90px;
    }

  .gallery-item {
    position: relative;
    height: 170px;
    background-size: cover;
    background-position: 50% 50%;
    flex 0 0 auto;
    margin: 0 5px;
    width: calc(33.3333% - 10px);
    background-color: #fafafa;
  }
    .gallery-item:not(:nth-last-child(-n+3)) {
      margin-bottom: 15px;
    }
    .gallery-item__delete {
      position: absolute;
      top: 10px;
      right: 10px;
      outline: none;
      opacity: .5;
      border-radius: 50%;
      padding: 0;
      background-color: #000;
      text-align: center;
      height: 20px;
      width: 20px;
      font-size: 11px;
      cursor: pointer;
      line-height: 20px;
      color: #fff;
      text-transform: uppercase;
    }

`;
