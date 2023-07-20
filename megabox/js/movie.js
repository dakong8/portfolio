$(document).ready(function(){

    /* 트레일러 영상 플레이어를 활성화 */
    /* YouTube iframe API: https://developers.google.com/youtube/player_parameters */
    
    (function handleTrailer(){
        var $selector = {
            body: $( 'body' ),
            overlay: $( '#blackout' ),
            modal: $( '#trailerModal' ),
            showButton: $( '#showTrailer' ),
            hideButton: $( '#hideTrailer' ),
        }; // 셀럭터 캐시
        
        /* player */
        var player = {
            obj: null, // 플레이어 오브젝트
            query : {
                theme: 'dark',
                color: 'white',
                controls: 1, 
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 0, // YouTube 로고 감춤
                rel: 0,  // 관련 동영상 표시
                showinfo: 0, // 제목, 업로더 감춤
                iv_load_policy: 3 // 특수효과 감춤
            },
            visible: false
        };
        
        $selector.showButton.on( 'click', showPlayer );
        $selector.hideButton.on( 'click', hidePlayer ); // 보이기, 숨기기 버튼 활성화
        
        /* YouTube API를 이용해 iframe을 생성 */
        function setPlayer( id ){
            player.obj = new YT.Player( 'trailer', {
                width: 480,
                height: 282,
                videoId: id,    
                playerVars: player.query
            });
            
            resizePlayer(); // 처음 플레이어 크기 설정
            
            $( window ).on( 'resize orientationchange', function() {
                resizePlayer();
            }); // 리사이즈 화면 회전시 플레이어 크기 다시 설정
        }
        
        function resizePlayer() {
            var viewport = {}, frame = {}, modal = {};

            viewport.width = $( window ).width();
            viewport.height = $( window ).height();

            frame.width = viewport.width;
            frame.height = frame.width / 1.6; // 16 : 10

            modal.top = ( ( viewport.height - frame.height ) / 2 ) + 'px';
            modal.left = '0px';
            
              $selector.modal.css( modal );

            player.obj.setSize( frame.width, frame.height );
        }

        /* show */
        function showPlayer() {
            if ( !player.obj ) {
                setPlayer( $selector.showButton.data('youtube') );
            }
            
            $selector.body.addClass('modal_on');
            $selector.overlay.show();
            player.visible = true;
        };
        
        /* hide */
        function hidePlayer(){
            player.obj.stopVideo();
            $selector.overlay.hide();
            $selector.body.removeClass('modal_on');
            player.visible = false;
        };
        
    })();
    
});   
