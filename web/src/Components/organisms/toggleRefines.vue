<template>
    <div class="mainMenu">
        <Refine
            @isOpen3="toggleChange"
            :categoryId=0
            :items="items"
            :isOpen="isOpen"
        ></Refine>
    </div>
    <transition name="slide">
        <div class="menu">
            <Refine
                v-if="isOpen"
                :categoryId="categoryId"
                @change3="handleMenuChange"
                @isOpen3="toggleChange"
                :items="items"
                :isOpen="isOpen"
                :categories="categories"
            ></Refine>
        </div>
    </transition>
</template>

<script>
import Refine from '../moleclese/refine.vue';

export default{
components:{
    Refine,
},
data() {
    return {
      items:{
            majorCategory:
            [{id:"age",name:"月齢",isOpen:false,value:[]},
                {id:"weight",name:"体重",isOpen:false,value:[]},
                {id:"height",name:"身長",isOpen:false,value:[]},
                {id:"category",name:"カテゴリ",isOpen:false,value:[]},
                {id:"bland",name:"ブランド",isOpen:false,value:[]},
                {id:"product_condition",name:"商品の状態",isOpen:false,value:[]},
                {id:"color",name:"colors",isOpen:false,value:[]},
                {id:"shipping_fee_responsibility",name:"配送料の負担",isOpen:false,value:[]},
                {id:"shipping_method",name:"発送オプション",isOpen:false,value:[]}
            ],
            minorCategory:[
                {majorId:1,id:1,name:"生後０カ月",checked:false},
                {majorId:1,id:2,name:"生後１カ月",checked:false},
                {majorId:1,id:3,name:"生後２カ月",checked:false},
                {majorId:1,id:4,name:"生後３カ月",checked:false},
                {majorId:2,id:1,name:"10g",checked:false},
                {majorId:2,id:2,name:"20g",checked:false},
                {majorId:3,id:1,name:"100cm",checked:false},
                {majorId:3,id:2,name:"120cm",checked:false},
                {majorId:4,id:1,name:"あ",checked:false},
                {majorId:4,id:2,name:"い",checked:false},
                {majorId:5,id:1,name:"高級ブランド",checked:false},
                {majorId:5,id:2,name:"偽ブランド",checked:false},
                {majorId:6,id:1,name:"良い",checked:false},
                {majorId:6,id:2,name:"ダメ",checked:false},
                {majorId:7,id:1,name:"黒",checked:false},
                {majorId:7,id:2,name:"白",checked:false},
                {majorId:8,id:1,name:"配送社が負担",checked:false},
                {majorId:8,id:2,name:"購入者が負担",checked:false},
                {majorId:9,id:1,name:"やまと",checked:false},
                {majorId:9,id:2,name:"くろねこ",checked:false},
        ]},
        categories:{
  "userId": 1,
  "sessionId": "ov2gga741a5ca024j8eeh82vu6",
  "codeMaster": [
    {
      "code_id": 140,
      "table": "age",
      "name": "生後0ヶ月"
    },
    {
      "code_id": 141,
      "table": "age",
      "name": "生後1ヶ月"
    },
    {
      "code_id": 142,
      "table": "age",
      "name": "生後2ヶ月"
    },
    {
      "code_id": 143,
      "table": "age",
      "name": "生後3ヶ月"
    },
    {
      "code_id": 144,
      "table": "age",
      "name": "生後4ヶ月"
    },
    {
      "code_id": 145,
      "table": "age",
      "name": "生後5ヶ月"
    },
    {
      "code_id": 146,
      "table": "age",
      "name": "生後6ヶ月"
    },
    {
      "code_id": 147,
      "table": "age",
      "name": "生後7ヶ月"
    },
    {
      "code_id": 148,
      "table": "age",
      "name": "生後8ヶ月"
    },
    {
      "code_id": 149,
      "table": "age",
      "name": "生後9ヶ月"
    },
    {
      "code_id": 150,
      "table": "age",
      "name": "生後10ヶ月"
    },
    {
      "code_id": 151,
      "table": "age",
      "name": "生後1年"
    },
    {
      "code_id": 152,
      "table": "age",
      "name": "生後2年"
    },
    {
      "code_id": 153,
      "table": "age",
      "name": "生後3年"
    },
    {
      "code_id": 154,
      "table": "age",
      "name": "生後4年"
    },
    {
      "code_id": 155,
      "table": "age",
      "name": "生後5年"
    },
    {
      "code_id": 156,
      "table": "age",
      "name": "生後6年"
    },
    {
      "code_id": 157,
      "table": "age",
      "name": "生後7年"
    },
    {
      "code_id": 158,
      "table": "weight",
      "name": "3kg"
    },
    {
      "code_id": 159,
      "table": "weight",
      "name": "6kg"
    },
    {
      "code_id": 160,
      "table": "weight",
      "name": "9kg"
    },
    {
      "code_id": 161,
      "table": "weight",
      "name": "10kg"
    },
    {
      "code_id": 162,
      "table": "weight",
      "name": "11kg"
    },
    {
      "code_id": 163,
      "table": "weight",
      "name": "12kg"
    },
    {
      "code_id": 164,
      "table": "weight",
      "name": "13kg"
    },
    {
      "code_id": 165,
      "table": "weight",
      "name": "14kg"
    },
    {
      "code_id": 166,
      "table": "weight",
      "name": "15kg"
    },
    {
      "code_id": 167,
      "table": "weight",
      "name": "16kg"
    },
    {
      "code_id": 168,
      "table": "height",
      "name": "~50cm"
    },
    {
      "code_id": 169,
      "table": "height",
      "name": "60cm"
    },
    {
      "code_id": 170,
      "table": "height",
      "name": "70cm"
    },
    {
      "code_id": 171,
      "table": "height",
      "name": "80cm"
    },
    {
      "code_id": 172,
      "table": "height",
      "name": "90cm"
    },
    {
      "code_id": 173,
      "table": "height",
      "name": "100cm"
    },
    {
      "code_id": 174,
      "table": "height",
      "name": "110cm"
    },
    {
      "code_id": 175,
      "table": "height",
      "name": "120cm"
    },
    {
      "code_id": 176,
      "table": "height",
      "name": "130cm"
    },
    {
      "code_id": 177,
      "table": "bland",
      "name": "STOKEE"
    },
    {
      "code_id": 178,
      "table": "bland",
      "name": "タンスのゲン"
    },
    {
      "code_id": 179,
      "table": "bland",
      "name": "gelato pique"
    },
    {
      "code_id": 180,
      "table": "bland",
      "name": "THE NORTH FACE"
    },
    {
      "code_id": 181,
      "table": "bland",
      "name": "tots&togs"
    },
    {
      "code_id": 182,
      "table": "bland",
      "name": "クリンスイ"
    },
    {
      "code_id": 183,
      "table": "bland",
      "name": "Cetaphil"
    },
    {
      "code_id": 184,
      "table": "bland",
      "name": "LION"
    },
    {
      "code_id": 185,
      "table": "bland",
      "name": "Laundrin'"
    },
    {
      "code_id": 186,
      "table": "bland",
      "name": "P&G"
    },
    {
      "code_id": 187,
      "table": "bland",
      "name": "Pigeon"
    },
    {
      "code_id": 188,
      "table": "bland",
      "name": "Kao"
    },
    {
      "code_id": 189,
      "table": "bland",
      "name": "KAGUWORLD"
    },
    {
      "code_id": 190,
      "table": "bland",
      "name": "エリエール"
    },
    {
      "code_id": 191,
      "table": "bland",
      "name": "DOSHISHA"
    },
    {
      "code_id": 192,
      "table": "bland",
      "name": "LAVONS"
    },
    {
      "code_id": 193,
      "table": "bland",
      "name": "その他"
    },
    {
      "code_id": 194,
      "table": "product_condition",
      "name": "新品、未使用"
    },
    {
      "code_id": 195,
      "table": "product_condition",
      "name": "未使用に近い"
    },
    {
      "code_id": 196,
      "table": "product_condition",
      "name": "目立った傷や汚れなし"
    },
    {
      "code_id": 197,
      "table": "product_condition",
      "name": "やや傷や汚れあり"
    },
    {
      "code_id": 198,
      "table": "product_condition",
      "name": "傷や汚れあり"
    },
    {
      "code_id": 199,
      "table": "product_condition",
      "name": "全体的に状態が悪い"
    },
    {
      "code_id": 200,
      "table": "shipping_fee_responsibility",
      "name": "着払い（購入者負担）"
    },
    {
      "code_id": 201,
      "table": "shipping_fee_responsibility",
      "name": "送料込み（出品者負担）"
    },
    {
      "code_id": 202,
      "table": "shipping_method",
      "name": "未定"
    },
    {
      "code_id": 203,
      "table": "shipping_method",
      "name": "ゆうメール"
    },
    {
      "code_id": 204,
      "table": "shipping_method",
      "name": "レターパック"
    },
    {
      "code_id": 205,
      "table": "shipping_method",
      "name": "普通郵便（定形、定形外）"
    },
    {
      "code_id": 206,
      "table": "shipping_method",
      "name": "クロネコヤマト"
    },
    {
      "code_id": 207,
      "table": "shipping_method",
      "name": "ゆうパック"
    },
    {
      "code_id": 208,
      "table": "shipping_method",
      "name": "クリックポスト"
    },
    {
      "code_id": 209,
      "table": "shipping_method",
      "name": "ゆうパケット"
    },
    {
      "code_id": 210,
      "table": "shipping_origin_region",
      "name": "北海道"
    },
    {
      "code_id": 211,
      "table": "shipping_origin_region",
      "name": "青森県"
    },
    {
      "code_id": 212,
      "table": "shipping_origin_region",
      "name": "岩手県"
    },
    {
      "code_id": 213,
      "table": "shipping_origin_region",
      "name": "宮城県"
    },
    {
      "code_id": 214,
      "table": "shipping_origin_region",
      "name": "秋田県"
    },
    {
      "code_id": 215,
      "table": "shipping_origin_region",
      "name": "山形県"
    },
    {
      "code_id": 216,
      "table": "shipping_origin_region",
      "name": "福島県"
    },
    {
      "code_id": 217,
      "table": "shipping_origin_region",
      "name": "茨城県"
    },
    {
      "code_id": 218,
      "table": "shipping_origin_region",
      "name": "栃木県"
    },
    {
      "code_id": 219,
      "table": "shipping_origin_region",
      "name": "群馬県"
    },
    {
      "code_id": 220,
      "table": "shipping_origin_region",
      "name": "埼玉県"
    },
    {
      "code_id": 221,
      "table": "shipping_origin_region",
      "name": "千葉県"
    },
    {
      "code_id": 222,
      "table": "shipping_origin_region",
      "name": "東京都"
    },
    {
      "code_id": 223,
      "table": "shipping_origin_region",
      "name": "神奈川県"
    },
    {
      "code_id": 224,
      "table": "shipping_origin_region",
      "name": "新潟県"
    },
    {
      "code_id": 225,
      "table": "shipping_origin_region",
      "name": "富山県"
    },
    {
      "code_id": 226,
      "table": "shipping_origin_region",
      "name": "石川県"
    },
    {
      "code_id": 227,
      "table": "shipping_origin_region",
      "name": "福井県"
    },
    {
      "code_id": 228,
      "table": "shipping_origin_region",
      "name": "山梨県"
    },
    {
      "code_id": 229,
      "table": "shipping_origin_region",
      "name": "長野県"
    },
    {
      "code_id": 230,
      "table": "shipping_origin_region",
      "name": "岐阜県"
    },
    {
      "code_id": 231,
      "table": "shipping_origin_region",
      "name": "静岡県"
    },
    {
      "code_id": 232,
      "table": "shipping_origin_region",
      "name": "愛知県"
    },
    {
      "code_id": 233,
      "table": "shipping_origin_region",
      "name": "三重県"
    },
    {
      "code_id": 234,
      "table": "shipping_origin_region",
      "name": "滋賀県"
    },
    {
      "code_id": 235,
      "table": "shipping_origin_region",
      "name": "京都府"
    },
    {
      "code_id": 236,
      "table": "shipping_origin_region",
      "name": "大阪府"
    },
    {
      "code_id": 237,
      "table": "shipping_origin_region",
      "name": "兵庫県"
    },
    {
      "code_id": 238,
      "table": "shipping_origin_region",
      "name": "奈良県"
    },
    {
      "code_id": 239,
      "table": "shipping_origin_region",
      "name": "和歌山県"
    },
    {
      "code_id": 240,
      "table": "shipping_origin_region",
      "name": "鳥取県"
    },
    {
      "code_id": 241,
      "table": "shipping_origin_region",
      "name": "島根県"
    },
    {
      "code_id": 242,
      "table": "shipping_origin_region",
      "name": "岡山県"
    },
    {
      "code_id": 243,
      "table": "shipping_origin_region",
      "name": "広島県"
    },
    {
      "code_id": 244,
      "table": "shipping_origin_region",
      "name": "山口県"
    },
    {
      "code_id": 245,
      "table": "shipping_origin_region",
      "name": "徳島県"
    },
    {
      "code_id": 246,
      "table": "shipping_origin_region",
      "name": "香川県"
    },
    {
      "code_id": 247,
      "table": "shipping_origin_region",
      "name": "愛媛県"
    },
    {
      "code_id": 248,
      "table": "shipping_origin_region",
      "name": "高知県"
    },
    {
      "code_id": 249,
      "table": "shipping_origin_region",
      "name": "福岡県"
    },
    {
      "code_id": 250,
      "table": "shipping_origin_region",
      "name": "佐賀県"
    },
    {
      "code_id": 251,
      "table": "shipping_origin_region",
      "name": "長崎県"
    },
    {
      "code_id": 252,
      "table": "shipping_origin_region",
      "name": "熊本県"
    },
    {
      "code_id": 253,
      "table": "shipping_origin_region",
      "name": "大分県"
    },
    {
      "code_id": 254,
      "table": "shipping_origin_region",
      "name": "宮崎県"
    },
    {
      "code_id": 255,
      "table": "shipping_origin_region",
      "name": "鹿児島県"
    },
    {
      "code_id": 256,
      "table": "shipping_origin_region",
      "name": "沖縄県"
    },
    {
      "code_id": 257,
      "table": "day_to_ship",
      "name": "1~2日で発送"
    },
    {
      "code_id": 258,
      "table": "day_to_ship",
      "name": "2~3日で発送"
    },
    {
      "code_id": 259,
      "table": "day_to_ship",
      "name": "4~7日で発送"
    },
    {
      "code_id": 260,
      "table": "status",
      "name": "販売中"
    },
    {
      "code_id": 261,
      "table": "status",
      "name": "売り切れ"
    },
    {
      "code_id": 262,
      "table": "transaction_status",
      "name": "発送待ち"
    },
    {
      "code_id": 263,
      "table": "transaction_status",
      "name": "発送後"
    },
    {
      "code_id": 264,
      "table": "transaction_status",
      "name": "受け取り評価待ち"
    },
    {
      "code_id": 265,
      "table": "transaction_status",
      "name": "受け取り評価後"
    },
    {
      "code_id": 266,
      "table": "transaction_status",
      "name": "取引終了"
    },
    {
      "code_id": 267,
      "table": "usage_durations",
      "name": "未使用"
    },
    {
      "code_id": 268,
      "table": "usage_durations",
      "name": "1ヶ月使用"
    },
    {
      "code_id": 269,
      "table": "usage_durations",
      "name": "半年使用"
    },
    {
      "code_id": 270,
      "table": "usage_durations",
      "name": "1年以上使用"
    },
    {
      "code_id": 271,
      "table": "notice",
      "name": "発送待ち"
    },
    {
      "code_id": 272,
      "table": "notice",
      "name": "発送後"
    },
    {
      "code_id": 273,
      "table": "notice",
      "name": "受け取り評価待ち"
    },
    {
      "code_id": 274,
      "table": "notice",
      "name": "受け取り評価後"
    },
    {
      "code_id": 275,
      "table": "notice",
      "name": "取引終了"
    },
    {
      "code_id": 276,
      "table": "notice_status",
      "name": "既読"
    },
    {
      "code_id": 277,
      "table": "notice_status",
      "name": "未読"
    }
  ],
  "major_category": [
    {
      "major_category_id": 1,
      "major_category": "ベビー服（~100cm）"
    },
    {
      "major_category_id": 2,
      "major_category": "キッズ服(~160cm)"
    },
    {
      "major_category_id": 3,
      "major_category": "おむつ・トイレ"
    },
    {
      "major_category_id": 4,
      "major_category": "移動用品"
    },
    {
      "major_category_id": 5,
      "major_category": "寝具・ベビー家具"
    },
    {
      "major_category_id": 6,
      "major_category": "おもちゃ"
    },
    {
      "major_category_id": 7,
      "major_category": "行事・記念品"
    }
  ],
  "minor_category": [
    {
      "minor_category_id": 1,
      "major_category_id": 1,
      "minor_category": "トップス"
    },
    {
      "minor_category_id": 2,
      "major_category_id": 1,
      "minor_category": "アウター"
    },
    {
      "minor_category_id": 3,
      "major_category_id": 1,
      "minor_category": "パンツ"
    },
    {
      "minor_category_id": 4,
      "major_category_id": 1,
      "minor_category": "スカート"
    },
    {
      "minor_category_id": 5,
      "major_category_id": 1,
      "minor_category": "ワンピース"
    },
    {
      "minor_category_id": 6,
      "major_category_id": 1,
      "minor_category": "ベビードレス"
    },
    {
      "minor_category_id": 7,
      "major_category_id": 1,
      "minor_category": "おくるみ"
    },
    {
      "minor_category_id": 8,
      "major_category_id": 1,
      "minor_category": "下着・肌着"
    },
    {
      "minor_category_id": 9,
      "major_category_id": 1,
      "minor_category": "パジャマ"
    },
    {
      "minor_category_id": 10,
      "major_category_id": 1,
      "minor_category": "ロンバース"
    },
    {
      "minor_category_id": 11,
      "major_category_id": 1,
      "minor_category": "その他"
    },
    {
      "minor_category_id": 12,
      "major_category_id": 2,
      "minor_category": "コート"
    },
    {
      "minor_category_id": 13,
      "major_category_id": 2,
      "minor_category": "ジャケット・上着"
    },
    {
      "minor_category_id": 14,
      "major_category_id": 2,
      "minor_category": "トップス"
    },
    {
      "minor_category_id": 15,
      "major_category_id": 2,
      "minor_category": "スカート"
    },
    {
      "minor_category_id": 16,
      "major_category_id": 2,
      "minor_category": "パンツ"
    },
    {
      "minor_category_id": 17,
      "major_category_id": 2,
      "minor_category": "ワンピース"
    },
    {
      "minor_category_id": 18,
      "major_category_id": 2,
      "minor_category": "セットアップ"
    },
    {
      "minor_category_id": 19,
      "major_category_id": 2,
      "minor_category": "パジャマ"
    },
    {
      "minor_category_id": 20,
      "major_category_id": 2,
      "minor_category": "フォーマル・ドレス"
    },
    {
      "minor_category_id": 21,
      "major_category_id": 2,
      "minor_category": "和服"
    },
    {
      "minor_category_id": 22,
      "major_category_id": 2,
      "minor_category": "下着"
    },
    {
      "minor_category_id": 23,
      "major_category_id": 2,
      "minor_category": "その他"
    },
    {
      "minor_category_id": 24,
      "major_category_id": 3,
      "minor_category": "おむつ用品"
    },
    {
      "minor_category_id": 25,
      "major_category_id": 3,
      "minor_category": "おまる"
    },
    {
      "minor_category_id": 26,
      "major_category_id": 3,
      "minor_category": "トレーニングパンツ"
    },
    {
      "minor_category_id": 27,
      "major_category_id": 3,
      "minor_category": "その他"
    },
    {
      "minor_category_id": 28,
      "major_category_id": 4,
      "minor_category": "ベビーカー"
    },
    {
      "minor_category_id": 29,
      "major_category_id": 4,
      "minor_category": "抱っこひも"
    },
    {
      "minor_category_id": 30,
      "major_category_id": 4,
      "minor_category": "チャイルドシート"
    },
    {
      "minor_category_id": 31,
      "major_category_id": 4,
      "minor_category": "その他"
    },
    {
      "minor_category_id": 32,
      "major_category_id": 5,
      "minor_category": "ベッド"
    },
    {
      "minor_category_id": 33,
      "major_category_id": 5,
      "minor_category": "毛布・布団"
    },
    {
      "minor_category_id": 34,
      "major_category_id": 5,
      "minor_category": "イス"
    },
    {
      "minor_category_id": 35,
      "major_category_id": 5,
      "minor_category": "タンス"
    },
    {
      "minor_category_id": 36,
      "major_category_id": 5,
      "minor_category": "その他"
    },
    {
      "minor_category_id": 37,
      "major_category_id": 6,
      "minor_category": "お風呂のおもちゃ"
    },
    {
      "minor_category_id": 38,
      "major_category_id": 6,
      "minor_category": "がらがら"
    },
    {
      "minor_category_id": 39,
      "major_category_id": 6,
      "minor_category": "オルゴール"
    },
    {
      "minor_category_id": 40,
      "major_category_id": 6,
      "minor_category": "手押し車"
    },
    {
      "minor_category_id": 41,
      "major_category_id": 6,
      "minor_category": "知育玩具"
    },
    {
      "minor_category_id": 42,
      "major_category_id": 6,
      "minor_category": "その他"
    },
    {
      "minor_category_id": 43,
      "major_category_id": 7,
      "minor_category": "お宮参り用品"
    },
    {
      "minor_category_id": 44,
      "major_category_id": 7,
      "minor_category": "お食い初め用品"
    },
    {
      "minor_category_id": 45,
      "major_category_id": 7,
      "minor_category": "アルバム"
    },
    {
      "minor_category_id": 46,
      "major_category_id": 7,
      "minor_category": "手形・足形"
    },
    {
      "minor_category_id": 47,
      "major_category_id": 7,
      "minor_category": "その他"
    }
  ],
  "colors": [
    {
      "color_id": 1,
      "color": "グリーン系",
      "color_code": "#36BC06"
    },
    {
      "color_id": 2,
      "color": "ブルー系",
      "color_code": "#77CBFF"
    },
    {
      "color_id": 3,
      "color": "パープル系",
      "color_code": "#FF77E5"
    },
    {
      "color_id": 4,
      "color": "イエロー系",
      "color_code": "#FAE594"
    },
    {
      "color_id": 5,
      "color": "ホワイト系",
      "color_code": "#FFFFFF"
    },
    {
      "color_id": 6,
      "color": "ブラウン系",
      "color_code": "#835D5D"
    },
    {
      "color_id": 7,
      "color": "ベージュ系",
      "color_code": "#EAAE74"
    },
    {
      "color_id": 8,
      "color": "レッド系",
      "color_code": "#FF6767"
    },
    {
      "color_id": 9,
      "color": "オレンジ系",
      "color_code": "#FFBA5F"
    },
    {
      "color_id": 10,
      "color": "ブラック系",
      "color_code": "#232323"
    },
    {
      "color_id": 11,
      "color": "グレイ系",
      "color_code": "#808080"
    },
    {
      "color_id": 12,
      "color": "ピンク系",
      "color_code": "#FFACEB"
    }
  ]
},
    
        categoryId:null,
        isOpen:false,
    };
  },
methods: {
    handleMenuChange({ minorId, newCheckedState,majorId }) {
    // minorId に対応する要素を探す
    const item = this.categories.codeMaster.find(item => item.code_id === minorId && item.table === majorId);
        // 要素が見つかれば checked を更新
        if (item) {
            item.checked = newCheckedState;
            if(item.checked){
                this.items.majorCategory[majorId-1].value.push(minorId);
            }else{
                const indexToRemove = this.items.majorCategory[majorId-1].value.indexOf(item.id);
                if (indexToRemove !== -1) {
                    this.items.majorCategory[majorId-1].value.splice(indexToRemove, 1);
                }
            }
        }
    },
    toggleChange({ majorId, isOpen }) {
        const item = this.items.majorCategory.find((item) => item.id === majorId);
        if (item) {
            item.isOpen = isOpen;
            this.isOpen = isOpen;
            this.categoryId = majorId;
            console.log(this.isOpen);
        };
    },
},
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {

}
.slide-enter-to, .slide-leave-from {
  
}
.mainMenu{
    position: fixed;
    z-index:0;
    right: 0px;
}
.menu{
    position: fixed;
    right: 0px;
    z-index: 10;
}

</style>


