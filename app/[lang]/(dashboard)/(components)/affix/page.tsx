"use client";
import React, { useState } from "react";
import Card from "@/components/ui/card-snippet";
import Affix from "@/components/ui/affix";
import { Button } from "@/components/ui/button";

const AffixPage = () => {
  const [top, setTop] = React.useState<number>(100);
  const [bottom, setBottom] = React.useState<number>(100);

  const [container, setContainer] = useState<number | null>(null);
  const containerStyle = {
    width: "100%",
    height: 100,
    overflow: "auto",
    border: "1px solid #40a9ff",
  };

  const style = {
    width: "100%",
    height: 1000,
  };
  const myElementRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-5">
      <div className="grid  xl:grid-cols-2 grid-cols-1 gap-5">
        <Card title="Default Affix">
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            The <code className="text-primary">offsetTop</code> props of Affix
            component set the minimal offset and setTop function add extra 10px
            onClick. .
          </p>
          <Affix offsetTop={top} target={myElementRef}>
            <Button color="primary" onClick={() => setTop(top + 10)}>
              Affix top
            </Button>
          </Affix>
        </Card>
        <Card title="Fixed Affix">
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            The <code className="text-primary">offsetTop and onChange</code>{" "}
            props of Affix component set the offset 120px .
          </p>
          <Affix offsetTop={120} target={myElementRef}>
            <Button>120px to affix top</Button>
          </Affix>
        </Card>
        <Card title="Example">
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            The <code className="text-primary">offsetTop and target</code> props
            of Affix component set the offset at fixed place.
          </p>
          <div style={containerStyle} ref={(el: any) => setContainer(el)}>
            <div style={style}>
              <Affix target={containerRef} offsetTop={50}>
                <Button color="primary">Fixed at the top of container</Button>
              </Affix>

            </div>
          </div>
        </Card>
      </div>
      <Card title="Example">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        possimus, repellat fuga culpa ipsum ipsam, assumenda unde deleniti, hic
        quibusdam cupiditate voluptas voluptate eos maxime earum totam aliquid
        tempore fugit aperiam. Quidem accusantium quis incidunt aliquam dicta
        minus aperiam illum similique repudiandae tempora non officia
        repellendus perferendis, itaque quisquam nisi optio necessitatibus omnis
        sit at debitis quo voluptatum odit enim? Suscipit qui inventore corrupti
        perspiciatis culpa vero mollitia voluptate reprehenderit. Deleniti,
        veritatis! Totam earum a suscipit veritatis libero aspernatur optio
        molestias deleniti quod amet similique voluptatibus eligendi laborum
        illo non, reprehenderit velit aliquid error maxime? Unde amet reiciendis
        tempora rem aspernatur sit laborum obcaecati eos natus quod, minus nobis
        officia deserunt placeat laboriosam ipsum inventore quos dolorem
        repellat. Provident nam debitis libero reprehenderit, ipsum maxime
        officia, voluptas autem vero placeat, nostrum eos quisquam praesentium
        commodi excepturi quae dignissimos architecto. Officiis fugiat
        repudiandae magnam quae asperiores vero sequi molestias illum, officia,
        minus sapiente neque esse beatae corrupti nam! Ut illo ex qui!
        Doloremque incidunt molestiae inventore ipsam eveniet tempora similique
        labore quidem illum. Temporibus aut consequuntur ea vel corporis rerum
        odit a dicta veniam, sequi voluptas repellat ex. Dolor autem ea commodi
        voluptatum laboriosam suscipit omnis minima! Vel consectetur quaerat
        voluptates natus corrupti nesciunt, accusantium exercitationem id
        consequatur nisi perferendis rerum quisquam neque incidunt similique at
        tempore sequi ut nobis dolor velit porro. Modi vero sit magnam repellat
        inventore vitae? Aut soluta beatae repudiandae ut natus incidunt
        deserunt cumque voluptatibus nemo delectus itaque sit pariatur, dolores
        ducimus consequatur, eos ab fuga dolorum dicta corrupti consectetur
        voluptatum veniam. Vero ad nihil sunt, repellat nostrum cum nobis
        reprehenderit dolorum repudiandae, aspernatur eius totam eum excepturi
        quia unde? Fugiat vero beatae exercitationem autem voluptatibus labore
        consequuntur natus quo velit culpa modi saepe dignissimos soluta
        voluptate at aperiam, distinctio quam enim nisi ullam amet. Incidunt
        vero aliquid praesentium laboriosam accusamus reprehenderit impedit
        asperiores possimus at tempore debitis, nesciunt ducimus deserunt quidem
        temporibus modi, quos recusandae iusto numquam nulla voluptatibus earum
        dolores voluptatem nobis! Dolore aut, quia voluptatum est laboriosam
        nisi consequuntur magni. Dolorum eaque voluptatum veritatis dolor aut
        deleniti, maiores similique ratione vel optio sequi mollitia officiis ad
        explicabo adipisci nostrum asperiores itaque quod. Dolor eos quod
        placeat cum soluta fugit earum a aut nam eveniet. Magni a neque quo
        doloremque voluptatibus dolorum distinctio odit vel laboriosam sit! Eum
        ullam doloribus ex exercitationem temporibus. Sit vitae et quas facere?
        Recusandae ipsam eligendi ad incidunt assumenda vitae aperiam esse
        delectus. Nemo voluptatum rerum soluta molestiae neque aut praesentium
        aperiam magnam temporibus sunt reiciendis earum ullam laudantium ducimus
        placeat ad facere repellendus aliquam debitis, ipsam natus cupiditate
        accusantium eligendi! Fugit quo, aliquam impedit tenetur repellendus in
        obcaecati ipsam, eveniet praesentium ab iste doloremque tempore quidem
        officia a expedita accusantium sunt quas rerum alias! Expedita nobis
        assumenda, dolores magnam architecto commodi nihil, eius eligendi sed
        eos voluptates aspernatur sapiente quaerat nisi. Distinctio aliquam,
        voluptate vero qui amet incidunt expedita dolorem veniam quia libero
        animi reprehenderit esse nam quidem odit ex sapiente facere quod
        explicabo unde nostrum corporis ratione soluta labore. Aspernatur
        doloribus reiciendis officia, illum id vero quidem consequuntur
        asperiores magni repellat excepturi neque inventore eos maxime earum
        animi. Doloremque voluptate libero rem, enim sapiente exercitationem,
        distinctio qui nam minima veritatis quidem deleniti impedit quisquam
        ratione vel atque velit at nulla. Deleniti, reiciendis nobis. Magni sed
        perspiciatis, nisi inventore, ullam cum in eveniet iste eaque hic atque
        officia, debitis corrupti enim. Ad voluptatum, saepe repudiandae id,
        repellendus culpa debitis voluptates, tempora adipisci rerum harum hic!
        Vero nemo asperiores at omnis, voluptatibus optio nesciunt illum
        blanditiis ducimus ullam, saepe obcaecati mollitia? Quos corrupti nisi
        magni ab consequatur, quae quia.
      </Card>
    </div>
  );
};

export default AffixPage;
