!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: 'Peaches',
            artist: 'Justin Bieber / Daniel Caesar / Giveon',
            url: 'http://music.163.com/song/media/outer/url?id=1907161101.mp3',
            cover: 'http://p1.music.126.net/_d1i74E6x-zTTnEmdVjEwA==/109951165835207944.jpg?param=130y130',
          },
          {
            name: "不用去猜",
            artist: "Jony J",
            url: "http://music.163.com/song/media/outer/url?id=1933996314.mp3",
            cover: "http://p1.music.126.net/h_1u3v9vTCRWN_ZJlVdQkQ==/18523472395121303.jpg?param=130y130"
          },
          {
            name: "フリージア",
            artist: "Uru",
            url: "http://music.163.com/song/media/outer/url?id=1358852294.mp3",
            cover: "http://p2.music.126.net/utkgcHVii9EdXyWxCHmvfw==/109951165050645409.jpg?param=130y130"
          },
          {
            name: "Without You (Otto Knows Remix)",
            artist: "Avicii / Sandro Cavazza / Otto Knows",
            url: "http://music.163.com/song/media/outer/url?id=1492521435.mp3",
            cover: "http://p1.music.126.net/Z1h2FnWGgUicCFStPulhhQ==/18853325881510382.jpg?param=130y130"
          }
        ]
      });
    }
  })();