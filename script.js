// ページが完全に読み込まれたときに実行する処理
document.addEventListener('DOMContentLoaded', function() {
    console.log('ページの読み込みが完了しました');  // コンソールにメッセージを出力

    // 各イベントリスナーを設定する
    setupEventListeners();
});

// イベントリスナーの設定
function setupEventListeners() {
    // 趣味追加ボタン
    const addHobbyBtn = document.getElementById('addHobbyBtn');
    addHobbyBtn.addEventListener('click', addHobbyFromInput);

    // 背景色変更ボタン
    const changeColorBtn = document.getElementById('changeColorBtn');
    changeColorBtn.addEventListener('click', changeBackgroundColor);

    // 追加情報表示ボタン
    const showExtraInfoBtn = document.getElementById('showExtraInfoBtn');
    showExtraInfoBtn.addEventListener('click', toggleExtraInfo);
}

// 背景色を変更
function changeBackgroundColor() {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
}

// ランダムな色を生成（HSLベース）
function generateRandomColor() {
    // H（色相）: 0～360度
    const hue = Math.floor(Math.random() * 360);
    // S（彩度）: 0～100%
    const saturation = Math.floor(Math.random() * 40) + 60;
    // L（明度）: 0～100%
    const lightness = Math.floor(Math.random() * 10) + 20;

    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return hslColor;
}

// 追加情報の表示・非表示切り替え
function toggleExtraInfo() {
    const extraInfoSection = document.getElementById('extraInfo');

    if (extraInfoSection) {
        extraInfoSection.classList.toggle('hidden');
        const button = document.getElementById('showExtraInfoBtn');
        if (extraInfoSection.classList.contains('hidden')) {
            button.textContent = '追加情報を表示';
        } else {
            button.textContent = '追加情報を非表示';
        }
    }
}

// 趣味を追加
function addHobby(hobbyName) {
    const hobbyList = document.querySelector('.hobby-list');

    // 新しい要素(divタグ)を作成
    const newHobby = document.createElement('div');
    newHobby.className = 'hobby-item';
    newHobby.textContent = hobbyName;

    hobbyList.appendChild(newHobby);
}

// 趣味を入力欄から追加
function addHobbyFromInput() {
    const hobbyInput = document.getElementById('newHobby');
    const hobby = hobbyInput.value.trim();  // 前後の空白を削除

    if (hobby !== '') { // 未入力でない場合追加
        const hobbyElement = document.createElement('div');
        hobbyElement.className = 'hobby-item';
        hobbyElement.textContent = hobby;

        // 趣味リストの末尾に追加
        const hobbyList = document.querySelector('.hobby-list');
        hobbyList.appendChild(hobbyElement);

        // 入力欄をクリア
        hobbyInput.value = '';
    } else {
        alert('趣味を入力してください');
    }
}