"use client";
import Card from "@/components/ui/card-snippet";
import ColorAlert from "./color-alert";
import OutlineAlert from "./outline-alert";
import SoftAlert from "./soft-alert";
import LinkAlert from "./link-alert";
import DisableAlert from "./dismissible-alert";
import DismissibleOutlineAlert from "./outline-dismissible-alert";
import DismissibleSoftColor from "./soft-aismissible-alert";
import DisableSoftIcon from "./disbale-soft-icon";
import {
  borderAlert,
  colorAlert,
  disableAlert,
  disableSoftIcon,
  dismissibleOutlineAlert,
  dismissibleSoftColor,
  headingAlert,
  headingAlertIcon,
  linkAlert,
  outlineAlert,
  softAlert,
} from "./source-code";
import BorderAlert from "./border-alert";
import HeadingAlert from "./heading-alert";
import HeadingAlertIcon from "./heading-alert-icon";

const AlertPage = () => {
  return (
    <div className="  space-y-5">
      <Card title="Color Alert" code={colorAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">color</code> props of alert change
          the color.
        </p>
        <ColorAlert />
      </Card>
      <Card title="Outline Alert" code={outlineAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant="outline"</code> props of
          alert change the outline of alert.
        </p>
        <OutlineAlert />
      </Card>
      <Card title="Soft Alert" code={softAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> variant="soft"</code> props of
          alert change to soft background of alert .
        </p>

        <SoftAlert />
      </Card>
      <Card title="Alert With Link" code={linkAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The alert<code className="text-primary">link</code> will direct user
          to new page .
        </p>
        <LinkAlert />
      </Card>
      <Card title="Dismissible Color Alerts" code={disableAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The alert <code className="text-primary">dismissible</code> props
          remove the alert .
        </p>
        <DisableAlert />
      </Card>
      <Card title="Dismissible Outline Alerts" code={dismissibleOutlineAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The alert{" "}
          <code className="text-primary">
            dismissible and variant="outline"
          </code>{" "}
          props remove the alert .
        </p>
        <DismissibleOutlineAlert />
      </Card>
      <Card title="Dismissible Soft Alerts" code={dismissibleSoftColor}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The alert{" "}
          <code className="text-primary">dismissible and variant="soft"</code>{" "}
          props remove the alert .
        </p>
        <DismissibleSoftColor />
      </Card>
      <Card title="Dismissible Soft Alerts With Icon" code={disableSoftIcon}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The alert <code className="text-primary">dismissible and Icon</code>{" "}
          props component to add design and remove the alert .
        </p>
        <DisableSoftIcon />
      </Card>
      <Card title="Bordered Alert" code={borderAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The alert <code className="text-primary">dismissible and Border</code>{" "}
          props component to add design and remove the alert .
        </p>
        <BorderAlert />
      </Card>
      <Card title="Alerts With Heading" code={headingAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The alert{" "}
          <code className="text-primary">dismissible and Large heading</code>{" "}
          props component to add design and remove the alert .
        </p>
        <HeadingAlert />
      </Card>
      <Card title="Alert Headings With Icon" code={headingAlertIcon}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The alert{" "}
          <code className="text-primary">
            dismissible and Large heading With Icon
          </code>{" "}
          props component to add design and remove the alert .
        </p>
        <HeadingAlertIcon />
      </Card>
    </div>
  );
};

export default AlertPage;
