import React, { useState } from 'react';

const data = {
  gyouji: [
    '「復活の祈り」',
    '七の日感謝祭',
    '発展・繁栄系祈願祭',
    '降魔・病気平癒系祈願祭',
    'The Missionミーティング',
    '「心の修行」',
    '百歳会',
    'いま学びたい御法話セミナー',
    'エンゼルプラン',
    'サクセスNo.1',
    '親子',
    '御法話拝聴会',
    '映画上映会',
    '伝道ー御法話拝聴会',
    '新復活祭',
    'ヘルメス大祭',
    '5月研修',
    '家庭ユートピア祈願大祭',
    '幸福供養祭',
    '大悟祭',
    '初転法輪記念祭',
    '御生誕祭',
    'エル・カンターレ祭',
    '街宣',
    '外部講師セミナー',
    '本部行事',
    '集い',
    '地区会',
    'チーム会',
    'ふれあい',
    'その他'
  ],
  doushis: [
    '田口義明',
    '馬場重善',
    '豊田利雄',
    '北村かおり',
    '豊田奈奈美',
    '渡辺和重',
    '飯田剛',
    '渡辺聖子',
    '野口佐知子',
    '鮫島三重子',
    '土谷恵',
    '中島真美',
    '相良屋昌夫',
    '神えり',
    '黒田信子',
    '雨谷大',
    '吉田瑞季',
    '中島謙一郎',
    'その他',
  ],
  onkyos: [
    '相良屋昌夫',
    '油井房雄',
    '豊田奈奈美',
    '北村かおり',
    '渡辺聖子',
    '野口佐知子',
    '土谷恵',
    '中島真美',
    '大森美都里',
    '武藤啓子',
    '神えり',
    'その他',
    ''
  ],
  shikais: [
    '豊田奈奈美',
    '北村かおり',
    '渡辺聖子',
    '野口佐知子',
    '土谷恵',
    '中島真美',
    'その他',
    ''
  ],
  uketsukes: [
    '豊田奈奈美',
    '北村かおり',
    '渡辺聖子',
    '野口佐知子',
    '土谷恵',
    '中島真美',
    '鮫島三重子',
    'その他',
    ''
  ],
};

const SearchComponent = ({ events, data, onSearch }) => {
  const [selectedGyouji, setSelectedGyouji] = useState('');
  const [selectedDoushi, setSelectedDoushi] = useState('');
  const [selectedOnkyo, setSelectedOnkyo] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const searchTerm = `${selectedGyouji} ${selectedDoushi} ${selectedOnkyo}`;
    const filteredResults = events.filter(
      (event) =>
        (selectedGyouji && event.title.includes(selectedGyouji)) ||
        (selectedDoushi && event.doushi.includes(selectedDoushi)) ||
        (selectedOnkyo && event.onkyo.includes(selectedOnkyo))
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sortedResults = filteredResults
    .filter(
      (event) =>
        isValidDate(event.start) &&
        isValidDate(event.end) &&
        event.end >= today
    )
    .sort((a, b) => a.start - b.start);

  setSearchResults(sortedResults);
  setShowPopup(true);
  onSearch(searchTerm.trim());
    
    // setSearchResults(filteredResults);
    // setShowPopup(true);
    // onSearch(searchTerm.trim());
  };

  const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date.getTime());
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSearchResults([]);
    setSelectedGyouji(''); // Reset the selectedGyouji state
    setSelectedDoushi(''); // Reset the selectedDoushi state
    setSelectedOnkyo(''); 
  };

  return (
    <div>
      <div>
        <label htmlFor="doushi">導師:</label>
        <select style={{ width: "30%", height: "30px", marginTop: "5px", marginBottom: "5px", marginRight: "10px" }}
          id="doushi"
          value={selectedDoushi}
          onChange={(e) => setSelectedDoushi(e.target.value)}
        >
          <option value="">導師選択</option>
          {data.doushis.map((doushi, index) => (
            <option key={index} value={doushi}>
              {doushi}
            </option>
          ))}
        </select>
        <label htmlFor="onkyo">音響:</label>
        <select style={{ width: "30%", height: "30px", marginTop: "5px", marginBottom: "5px", marginRight: "10px" }}
          id="onkyo"
          value={selectedOnkyo}
          onChange={(e) => setSelectedOnkyo(e.target.value)}
        >
          <option value="">音響選択</option>
          {data.onkyos.map((onkyo, index) => (
            <option key={index} value={onkyo}>
              {onkyo}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="gyouji">行事:</label>
        <select
          id="gyouji"
          value={selectedGyouji}
          onChange={(e) => setSelectedGyouji(e.target.value)}
        >
          <option value="">行事選択</option>
          {data.gyouji.map((gyouji, index) => (
            <option key={index} value={gyouji}>
              {gyouji}
            </option>
          ))}
        </select>
      </div>

      <button style={{ width: "30%", height: "30px", marginTop: "5px", marginBottom: "10px", marginRight: "10px" }} onClick={handleSearch}>検索ボタン</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>下に”戻る”ボタンがあります！！</h3>
            <br />
            {searchResults.map((event, index) => (
              <div key={index}>
                <h4>{event.title}</h4>
                <p>開始時間: {event.start.toLocaleString()}</p>
                <p>終了時間: {event.end.toLocaleString()}</p>
                <p>導師: {event.doushi}</p>
                <p>音響: {event.onkyo}</p>
                <p>司会: {event.shikai}</p>
                <p>受付: {event.uketsuke}</p>
                <p>備考: {event.comment}</p>
                <br />
              </div>
            ))}
            <button style={{ width: "30%", height: "30px", marginTop: "5px", marginLeft: "30%" }}onClick={handleClosePopup}>戻る</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;