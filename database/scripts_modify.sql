SET FOREIGN_KEY_CHECKS=0;
alter table vot_formula_consejo MODIFY `VfId` int(11) unsigned NOT NULL AUTO_INCREMENT;
SET FOREIGN_KEY_CHECKS=1;

alter table vot_consejo MODIFY `Vcnombre` varchar(100);

ALTER TABLE vot_consejo CHANGE `Vcnombre` `VcNombre` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL;

ALTER TABLE vot_plan ADD `VplCodigo` VARCHAR(20) COLLATE utf8_unicode_ci NOT NULL;

UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/psicologia1.jpg' WHERE `VcId`='7';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/NUEVO-LOGO-ECH.jpg' WHERE `VcId`='11';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/LogoE.jpg' WHERE `VcId`='6';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/logoCER.jpg' WHERE `VcId`='10';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/logo1.png' WHERE `VcId`='9';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/LOGO-CPGDU1.jpg' WHERE `VcId`='8';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/Logo-CJ.png' WHERE `VcId`='12';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/Logo-CEM.jpg' WHERE `VcId`='13';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/Logo-CECNM.jpg' WHERE `VcId`='2';
UPDATE `votaciones_ur`.`vot_consejo` SET `VcFoto`='assets/images/consejos/CERI.jpg' WHERE `VcId`='1';
