import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import Input from "@/components/input/Input";
import Alert from "@/components/alert/Alert";
import Table from "@/components/table/Table";
import Loader from "@/components/loader/Loader";

export default function StyleguidePage() {
  const tableColumns = [
    { key: "name", title: "Name" },
    { key: "type", title: "Type" },
  ];

  const tableData = [
    { name: "useState", type: "Hook" },
    { name: "useEffect", type: "Hook" },
  ];

  return (
    <div className="p-styleguide">
      <h1 className="p-styleguide__title">Styleguide</h1>

      <div className="p-styleguide__grid">

        {/* LEFT COLUMN */}
        <div className="p-styleguide__col">

          {/* BUTTON */}
          <section className="p-styleguide__section">
            <h2>Buttons</h2>
            <div className="p-styleguide__demo">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </section>

          {/* INPUT */}
          <section className="p-styleguide__section">
            <h2>Inputs</h2>
            <div className="p-styleguide__demo">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Error" error="Required field" />
            </div>
          </section>

          {/* ALERT */}
          <section className="p-styleguide__section">
            <h2>Alerts</h2>
            <div className="p-styleguide__demo">
              <Alert>Info message</Alert>
              <Alert type="success">Success message</Alert>
              <Alert type="error">Error message</Alert>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN */}
        <div className="p-styleguide__col">

          {/* CARD */}
          <section className="p-styleguide__section">
            <h2>Cards</h2>
            <div className="p-styleguide__demo">
              <Card title="Card Title">
                <p>Card content</p>
              </Card>
            </div>
          </section>

          {/* TABLE */}
          <section className="p-styleguide__section">
            <h2>Table</h2>
            <Table columns={tableColumns} data={tableData} />
          </section>

          {/* LOADER */}
          <section className="p-styleguide__section">
            <h2>Loader</h2>
            <div className="p-styleguide__demo">
              <Loader />
              <Loader size="sm" />
              <Loader size="lg" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
