import { AppRoot, Tabbar, FixedLayout } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import '@vkontakte/icons';
import { Icon28ClockOutline, Icon28HomeOutline, Icon28ListArrowLeftDownOutline, Icon28MoneyHistoryBackwardOutline, Icon28TagOutline, Icon28WalletOutline } from '@vkontakte/icons';
// 匯入圖標 (建議使用官方圖標庫或自定義 SVG)

export const MyTabbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', text: '主頁', icon: <Icon28HomeOutline /> },
    { id: 'tasks', text: '排行榜', icon: <Icon28ListArrowLeftDownOutline /> },
    { id: 'wallet', text: '神组合', icon: <Icon28ClockOutline /> },
    { id: 'wallet', text: '历史数据', icon: <Icon28MoneyHistoryBackwardOutline /> },
    { id: 'wallet', text: '我的', icon: <Icon28TagOutline /> },
  ];

  return (
    <>
      {/* 你的主內容區域 */}
      <main style={{ paddingBottom: '60px' ,minHeight:'100vh'}}>
        {activeTab === 'home' /* && <HomeView /> */}
      </main>

      {/* 固定在底部的標籤欄 */}
      <FixedLayout vertical="bottom">
        <Tabbar>
          {tabs.map(({ id, text, icon }) => (
            <Tabbar.Item
              key={id}
              text={text}
              selected={activeTab === id}
              onClick={() => setActiveTab(id)}
            >
              {icon}
            </Tabbar.Item>
          ))}
        </Tabbar>
      </FixedLayout>
      </>
    
  );
};
