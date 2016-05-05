  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import YTSearch from 'youtube-api-search';

  import SearchBar from './components/search_bar';
  import VideoList from './components/video_list';
  import VideoDetail from './components/video_detail';


  const API_KEY = 'AIzaSyDqpuEJPKNMFzJpHT-eYXS9EMFHbS-ba7M';


  YTSearch({ key: API_KEY,  term: 'surfboards'},  function(data){
    console.log(data);
  });

// Create a new component. This component should produce
//  some HTML
// NOTE:  this creaates a "class", not an instance of a class
class App extends Component {
   constructor(props){
     super(props);

     this.state = {
      videos: [],
      selectedVideo: null
     };

     YTSearch({ key: API_KEY,  term: 'surfboards'},  (videos) => {
      // console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this.setState({ videos: videos});
     });

   }

   render() {
      return (
        <div>
           <SearchBar />
           <VideoDetail video={this.state.selectedVideo}/>
           <VideoList
              onVideoSelect={ selectedVideo => this.setState({selectedVideo})    }
              videos={this.state.videos}/>

        </div>
      );
   }
};


// React please take this components generated html
// and put it on the page (in the DOM)
  ReactDOM.render(<App />, document.querySelector('.container'));
