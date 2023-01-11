import { MigrationInterface, QueryRunner } from "typeorm";

export class init1673386195035 implements MigrationInterface {
    name = 'init1673386195035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ip" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "ip" character varying NOT NULL, "type" character varying NOT NULL, "continent" character varying NOT NULL, "continent_code" character varying NOT NULL, "region" character varying NOT NULL, "region_code" character varying NOT NULL, "city" character varying NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "is_eu" boolean NOT NULL, "postal" character varying NOT NULL, "calling_code" character varying NOT NULL, "capital" character varying NOT NULL, "borders" character varying NOT NULL, "flag" json NOT NULL, "connection" json NOT NULL, "timezone" json NOT NULL, "currency" json, "security" json, CONSTRAINT "PK_b12fba291251bda71560e34b209" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ip"`);
    }

}
