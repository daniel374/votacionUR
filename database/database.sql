--create database votaciones_ur;

--use votaciones_ur;


use casaur_development;

CREATE TABLE IF NOT EXISTS `vot_consejo` (
    `VcId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VcNombre` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    `VcFoto` VARCHAR(45) COLLATE utf8_unicode_ci,
    INDEX indice_VcNombre (VcNombre)
) engine=InnoDB DEFAULT CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS `vot_periodo` (
    `VpId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VpNombre` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    `VpFechaInicio` DATETIME,
    `VpFechaFin` DATETIME
) engine=InnoDB DEFAULT CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS `vot_plan` (
    `VplId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VplCodigo` VARCHAR(20) COLLATE utf8_unicode_ci NOT NULL,
    `VplNombre` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    `VplConsejo` INT(11) unsigned NOT NULL,
    INDEX indice_VplCodigoVplNombre (VplCodigo,VplNombre), 
    CONSTRAINT `fk_vot_plan_vot_consejo`
    FOREIGN KEY (VplConsejo) REFERENCES vot_consejo (VcId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) engine=InnoDB DEFAULT CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS `vot_estados_estudiantes` (
    `VeEId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VeENombre` VARCHAR(45) COLLATE utf8_unicode_ci NOT NULL,
    INDEX indice_VeENombre (VeENombre)
) engine=InnoDB DEFAULT CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS `vot_estudiantes` (
    `VesId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VresTipoDocumento` int(11) unsigned NOT NULL,
    `VresNumDocumento` VARCHAR(25) COLLATE utf8_unicode_ci NOT NULL,
    `VesNombre` VARCHAR(45) COLLATE utf8_unicode_ci,
    `VesEmail` VARCHAR(45) COLLATE utf8_unicode_ci,
    unique key `users_email_unique` (`VesEmail`),
    INDEX indice_VresNumDocumento (VresNumDocumento)
) engine=InnoDB DEFAULT CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS `vot_log_votaciones` (
    `VlgId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VlgEstudiante` int(11) unsigned,
    `VlgFechaVotacion` DATETIME default current_timestamp,
    `VlgConsejo` int(11) unsigned,
    CONSTRAINT `fk_vot_log_votaciones_vot_estudiantes`
    FOREIGN KEY (VlgEstudiante) REFERENCES vot_estudiantes (`VesId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_vot_log_votaciones_vot_consejo`
    FOREIGN KEY (VlgConsejo) REFERENCES vot_consejo (VcId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
) engine=InnoDB DEFAULT CHARACTER SET=utf8;


CREATE TABLE IF NOT EXISTS `vot_estudiante_x_planes` (
    `VepId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VepEstudiante` int(11) unsigned NOT NULL,
    `VepPlan` int(11) unsigned NOT NULL,
    `VepEstadoEstudiante` int(11) unsigned NOT NULL,
    `Vepsemestre` VARCHAR(45) COLLATE utf8_unicode_ci NOT NULL,
    `VepEstadoVoto` TINYINT(4) NOT NULL,
    CONSTRAINT `fk_vot_estudiante_x_planes_vot_estudiantes`
    FOREIGN KEY (VepEstudiante) REFERENCES vot_estudiantes (VesId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_vot_estudiante_x_planes_vot_plan`
    FOREIGN KEY (VepPlan) REFERENCES vot_plan (VplId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_vot_estudiante_x_planes_vot_estados_estudiantes`
    FOREIGN KEY (VepEstadoEstudiante) REFERENCES vot_estados_estudiantes (VeEId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
) engine=InnoDB DEFAULT CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS `vot_formula_consejo` (
    `VfId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Vfnombre_lista` VARCHAR(45) COLLATE utf8_unicode_ci,
    `VfPresidenteNombre` VARCHAR(45) COLLATE utf8_unicode_ci,
    `VfPresidenteFoto` TEXT(4500) COLLATE utf8_unicode_ci,
    `VfVicepresidenteNombre` VARCHAR(45) COLLATE utf8_unicode_ci,
    `VfVicepresidenteFoto` TEXT(4500) COLLATE utf8_unicode_ci,
    `VfConsejo` int(11) unsigned NOT NULL,
    CONSTRAINT `fk_vot_formula_consejo_vot_consejo`
    FOREIGN KEY (VfConsejo) REFERENCES vot_consejo (VcId)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) engine=InnoDB DEFAULT CHARACTER SET=utf8;


CREATE TABLE IF NOT EXISTS `vot_representantes` (
    `VrepId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VrepNombre` VARCHAR(45) COLLATE utf8_unicode_ci,
    `VrepFoto` TEXT(4500) COLLATE utf8_unicode_ci,
    `VrepPlan` int(11) unsigned,
    `VrepSemestre` VARCHAR(45) COLLATE utf8_unicode_ci,
    `VrepNombreLista` VARCHAR(45) COLLATE utf8_unicode_ci,
    `VrepPeriodo` int(11) unsigned,
    CONSTRAINT `fk_vot_representantes_vot_plan`
    FOREIGN KEY (VrepPlan) REFERENCES vot_plan (VplId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_vot_representantes_vot_periodo`
    FOREIGN KEY (VrepPeriodo) REFERENCES vot_periodo (VpId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
 ) engine=InnoDB DEFAULT CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS `vot_resultados` (
    `VresId` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `VresFormula` int(11) unsigned,
    `VresFecha` DATETIME,
    `VresTipo` VARCHAR(45) COLLATE utf8_unicode_ci,
    `VresRepresentante` int(11) unsigned,
    CONSTRAINT `fk_vot_resultados_vot_formula`
    FOREIGN KEY (VresFormula) REFERENCES vot_formula_consejo (VfId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_vot_resultados_vot_representantes`
    FOREIGN KEY (VresRepresentante) REFERENCES vot_representantes (VrepId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) engine=InnoDB DEFAULT CHARACTER SET=utf8;

