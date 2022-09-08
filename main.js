// JavaScript Document
<script>
        function DecodeJump(){
          var cURL = new Array();
          //ここに暗号化URLをコピーして下さい▽▽▽▽▽▽▽▽▽
          cURL[0] = "12288,12311,12291,12312,12377,12376,12359,12308,12288,12319,12365,12292,12288,12298,12288,12301,12299,12318,12358,12288,12312,12293,12364,12318,12294,12295,12306,12304,12365,12295,12288,12307";
          cURL[1] = "12514,12519,12347,12538,12457,12384,12453,12516,12344,12541,12477,12348,12514,12538,12344,12527,12539,12326,12452,12528,12320,12519,12476,12323,12515,12541,12324,12453,12538,12321,12526,12534,12343,12452,12515,12327,12538";
          cURL[2] = "12330,12541,12424,12312,12408,12454,12499,12319,12341,12542,12498,12315,12330,12512,12427,12301,12330,12512,12498,12299,12333,12516,12499,12299,12333,12517,12425,12293,12332,12455,12428,12288,12338";
          //ここに暗号化URLをコピーして下さい△△△△△△△△△
          var KeyWord;
          KeyWord = document.frmAngoukaJump.txtPasswordForDecode.value;
        
          re = new RegExp("http://www\.shiwehi\.com/.+\.php$", "i");//URLが左の形式に一致しているかを判定する
          //ここの記述はなるべく長いほうが誤作動が起きにくいです。URLの正規表現については調べてください。
          var str = new Array();
          for ( var k = 0; k <= cURL.length - 1; k++ ){
            str[k] = De(cURL[k],KeyWord);
          }
        
            if (str[0].match(re)) {
              document.location.href = str[0] ;//cURL[0]に設定された文字列が入力されたらcURL[0]に設定されたURLに遷移する
            } else if (str[1].match(re)) {
              document.location.href = str[1] ;//cURL[1]に設定された文字列が入力されたらcURL[1]に設定されたURLに遷移する
            } else if (str[2].match(re)) {
              alert("「あらーと」が入力されました。");//cURL[2]に設定された文字列が入力されたらアラートを出す。
            }else{
              alert("登録されていない文字列です。");//cURLに設定されていない単語が入力された。
            }
        }
        
        function MakeKey(Key,Nmb){
          var j;
          KeyBuff = new Array(Nmb);
          for(j=0;j < Nmb;j++){
            KeyBuff[j] = Key.substr(j % Key.length,1).charCodeAt(0);
          }
        }
        
        function De(str,mKey){
          var StrBuff = str.split(",");
          var LBuff = "";
          UB = StrBuff.length; MakeKey(mKey,UB);
          for(i = 0; i < UB;i++ ){
            StrBuff[i] = unescape(StrBuff[i]) ^ KeyBuff[i];
            LBuff = LBuff + String.fromCharCode(StrBuff[i]); 
          }
          return LBuff;
        }
</script>