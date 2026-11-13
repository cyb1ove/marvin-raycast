import { Action, ActionPanel, Icon, List, showToast, Toast } from "@raycast/api";
import { useState } from "react";

type Item = {
  id: string;
  title: string;
  subtitle: string;
  icon: Icon;
};

const ITEMS: Item[] = [
  { id: "1", title: "First item", subtitle: "Template data", icon: Icon.Star },
  { id: "2", title: "Second item", subtitle: "Template data", icon: Icon.Bolt },
  { id: "3", title: "Third item", subtitle: "Template data", icon: Icon.Heart },
];

export default function Command() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <List isShowingDetail={showDetail} searchBarPlaceholder="Search items...">
      {ITEMS.map((item) => (
        <List.Item
          key={item.id}
          icon={item.icon}
          title={item.title}
          subtitle={showDetail ? undefined : item.subtitle}
          detail={<List.Item.Detail markdown={`# ${item.title}\n\n${item.subtitle}\n\nID: \`${item.id}\``} />}
          actions={
            <ActionPanel>
              <Action
                title={showDetail ? "Hide Details" : "Show Details"}
                icon={Icon.Sidebar}
                onAction={() => setShowDetail((v) => !v)}
              />
              <Action.CopyToClipboard title="Copy Title" content={item.title} />
              <Action
                title="Show Toast"
                icon={Icon.Bell}
                shortcut={{ modifiers: ["cmd"], key: "t" }}
                onAction={() => showToast({ style: Toast.Style.Success, title: item.title })}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
