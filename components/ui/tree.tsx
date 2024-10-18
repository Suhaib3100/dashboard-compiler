import React, { useState, useEffect, FunctionComponent } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, Check, Minus } from "lucide-react";

interface TreeNodeData {
  id: string;
  label: string;
  children?: TreeNodeData[];
  checked?: boolean;
  icon?: React.ReactNode;
}

interface TreeNodeProps {
  node: TreeNodeData;
  onCheck: (id: string, checked: boolean) => void;
  onExpand: (id: string) => void;
  onSelect?: (node: TreeNodeData) => void;
  expandedKeys: string[];
  checkable: boolean;
  endContent: React.ReactNode;
  className?: string;
  showLine: boolean;
}

const TreeNode: FunctionComponent<TreeNodeProps> = ({
  node,
  onCheck,
  onExpand,
  onSelect,
  expandedKeys,
  checkable,
  endContent,
  className,
  showLine,
}) => {
  const { id, label, children, checked, icon } = node;
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  useEffect(() => {
    const someChecked = children && children.some((child) => child.checked);
    const allChecked = children && children.every((child) => child.checked);

    setIsIndeterminate(someChecked && !allChecked ? true : false);
  }, [children]);

  const handleCheck = () => {
    const updatedChecked = !isChecked;
    setIsChecked(updatedChecked);
    setIsIndeterminate(false);
    onCheck(id, updatedChecked);
  };

  const hasChildren = children && children.length > 0;
  const handleExpand = () => {
    if (hasChildren) {
      onExpand(id);
    }
  };

  const handleSelect = () => {
    if (onSelect) {
      onSelect(node);
    }
  };

  return (
    <div
      className={cn("space-y-3 relative z-[1]", {
        "before:absolute ltr:before:left-2 rtl:before:right-2 before:top-0 before:h-[calc(100%-23px)] before:w-[2px] before:bg-secondary before:rounded before:z-[-1]":
          hasChildren && expandedKeys.includes(id) && showLine,
      })}
    >
      <div className="flex gap-1.5 items-center">
        {checkable && (
          <label className="block flex-none relative top-1">
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={handleCheck}
              onClick={handleSelect}
              ref={(input) => {
                if (input) {
                  (input as HTMLInputElement).indeterminate = isIndeterminate;
                }
              }}
            />
            <span
              className={cn("h-4 w-4 border rounded inline-flex cursor-pointer", {
                "border-primary bg-primary": isChecked || isIndeterminate,
                "border-default-200 bg-background": !isChecked && !isIndeterminate,
              })}
            >
              {isChecked && <Check className="h-3.5 w-3.5 stroke-primary-foreground" />}
              {isIndeterminate && <Minus className="h-3.5 w-3.5 stroke-primary-foreground" />}
            </span>
          </label>
        )}
        <div
          data-open={hasChildren && expandedKeys.includes(id) ? "true" : null}
          className={cn(
            "inline-flex py-3 px-3 gap-3 transition-all duration-200 items-center [&_.menu-arrow>svg]:h-4 [&_.menu-arrow>svg]:w-4 cursor-pointer text-base text font-medium data-[open=true]:bg-default-200/80 rounded",
            className
          )}
          onClick={handleExpand}
        >
          {icon && <span className="[&>svg]:w-5 [&>svg]:h-4">{icon}</span>}
          <span className="inline-flex leading-none">{label}</span>
          {hasChildren && (
            <button
              onClick={handleExpand}
              className={cn(
                "transform transition-all duration-200 flex-none leading-none menu-arrow rtl:rotate-180",
                {
                  "rotate-90 rtl:rotate-90": expandedKeys.includes(id),
                }
              )}
            >
              {endContent}
            </button>
          )}
        </div>
      </div>

      {hasChildren && (
        <div className="relative ltr:ml-5 rtl:mr-5">
          {expandedKeys.includes(id) &&
            children.map((child) => (
              <React.Fragment key={child.id}>
                {showLine && (
                  <span className="absolute ltr:-left-3 rtl:right-3 mt-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <path
                        d="M1 1v4a8 8 0 0 0 8 8h4"
                        className="stroke-secondary stroke-2 stroke-linecap-round fill-none"
                      />
                    </svg>
                  </span>
                )}
                <TreeNode
                  node={child}
                  onCheck={onCheck}
                  onExpand={onExpand}
                  onSelect={onSelect}
                  expandedKeys={expandedKeys}
                  checkable={checkable}
                  endContent={endContent}
                  className={className}
                  showLine={showLine}
                />
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
};

interface TreeProps {
  data: TreeNodeData[];
  onSelect?: (node: TreeNodeData) => void;
  defaultExpandedKeys?: string[];
  defaultSelectedKeys?: string[];
  defaultCheckedKeys?: string[];
  onCheck?: (data: TreeNodeData[]) => void;
  checkable?: boolean;
  endContent?: React.ReactNode;
  className?: string;
  showLine?: boolean;
}

const Tree: FunctionComponent<TreeProps> = ({
  data = [],
  onSelect,
  defaultExpandedKeys = [],
  defaultSelectedKeys = [],
  defaultCheckedKeys = [],
  onCheck,
  checkable = false,
  endContent = <ChevronRight />,
  className,
  showLine = false,
}) => {
  const [treeData, setTreeData] = useState<TreeNodeData[]>(data);
  const [expandedKeys, setExpandedKeys] = useState<string[]>(defaultExpandedKeys);

  useEffect(() => {
    setTreeData(data);
  }, [data]);

  const handleCheck = (nodeId: string) => {
    const updatedData = toggleNodeChecked(treeData, nodeId);
    setTreeData(updatedData);
    if (onCheck) {
      onCheck(updatedData);
    }
  };

  const toggleNodeChecked = (nodes: TreeNodeData[], nodeId: string): TreeNodeData[] => {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const updatedNode = { ...node, checked: !node.checked };
        if (updatedNode.children) {
          updatedNode.children = toggleAllChildren(updatedNode.children, updatedNode.checked || false);
        }
        return updatedNode;
      } else if (node.children) {
        const updatedChildren = toggleNodeChecked(node.children, nodeId);
        const allChecked = updatedChildren.every((child) => child.checked);
        const someChecked = updatedChildren.some((child) => child.checked);

        return {
          ...node,
          children: updatedChildren,
          checked: allChecked ? true : someChecked ? undefined : false,
        };
      }
      return node;
    });
  };

  const toggleAllChildren = (children: TreeNodeData[], checked: boolean): TreeNodeData[] => {
    return children.map((child) => ({
      ...child,
      checked,
      children: child.children ? toggleAllChildren(child.children, checked) : undefined,
    }));
  };

  const handleExpand = (nodeId: string) => {
    setExpandedKeys((prevExpandedKeys) =>
      prevExpandedKeys.includes(nodeId)
        ? prevExpandedKeys.filter((key) => key !== nodeId)
        : [...prevExpandedKeys, nodeId]
    );
  };

  const handleSelect = (selectedNode: TreeNodeData) => {
    if (onSelect) {
      onSelect(selectedNode);
    }
  };

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          onCheck={handleCheck}
          onExpand={handleExpand}
          expandedKeys={expandedKeys}
          onSelect={handleSelect}
          checkable={checkable}
          endContent={endContent}
          className={className}
          showLine={showLine}
        />
      ))}
    </div>
  );
};

export { Tree };
