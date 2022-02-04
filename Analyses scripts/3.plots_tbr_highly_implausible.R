##Is Earth a Perfect Square? Repetition Increases the Perceived Truth of Highly Implausible Statements
#Pre-registration here: https://osf.io/pe4g9/
#Generate plots
##Script by: Jeremy Bena

#clear out the environment if needed
rm(list=ls())

#Call (or install and call) packages we will use
library(pacman) 
p_load('tidyverse', 'psych', 'ggpubr') 

#read the final data file
data_test_final = read.csv("data/data_analyses_tbr_highly_implausible.csv")

#tell R the following columns are factors
data_test_final$url.srid = as.factor(data_test_final$url.srid)
data_test_final$repetition = as.factor(data_test_final$repetition)
data_test_final$condition = as.factor(data_test_final$condition) 
data_test_final$statement_test = as.factor(data_test_final$statement_test)

#Aggregate responses by participant and repetition condition
rep_agg = data_test_final %>% 
  group_by(repetition, url.srid) %>% 
  summarise(mean_truth = mean(slider_truth_response)) 

#Aggregate responses by participant, counterbalancing, and repetition condition
rep_agg_cond = data_test_final %>% 
  group_by(repetition, condition, url.srid) %>% 
  summarise(mean_truth = mean(slider_truth_response)) 

#Aggregate responses by participant, statement, and repetition condition
rep_agg_statement = data_test_final %>% 
  group_by(repetition, statement_test, url.srid) %>% 
  summarise(mean_truth = mean(slider_truth_response)) 

#wide format
data_wide = rep_agg %>% pivot_wider(names_from = repetition
                                    ,values_from = mean_truth)

#compute a truth effect score by participant
data_wide$te_score = data_wide$repeated-data_wide$new

#Plots

##Make an "apa" theme
apatheme=theme_bw()+
  theme(panel.grid.major=element_blank(),
        panel.grid.minor=element_blank(),
        panel.border=element_blank(),
        axis.line=element_line(),
        text=element_text(size=18),
        axis.title.x = element_text(face="bold", size = 15),
        axis.title.y = element_text(face="bold", size = 12))
limits = aes(ymax = mean + (1.96*se), ymin=mean - (1.96*se))
dodge = position_dodge(width=0.9)

#Plot repetition by statement (Figure 2 in the manuscript)

#Aggregate responses by statement and repetition condition
rep_agg_statements = data_test_final %>% 
  group_by(statement_test, repetition, url.srid) %>% 
  summarise(mean_truth = mean(slider_truth_response)) 

#rename the Repetition's levels
rep_agg_statements$repetition = plyr::revalue(rep_agg_statements$repetition, c("new"="New", "repeated"="Repeated"))

#compute means, sds... for each statement in each repetition condition
plot_statements = describeBy(rep_agg_statements$mean_truth, list(rep_agg_statements$statement_test, rep_agg_statements$repetition), mat=TRUE)

#statements are levels of a factor, not character
plot_statements$group1 = as.factor(unclass(plot_statements$group1))

#change statements order for the plot (as a function of perceived truth regardless of repetition)
plot_statements$group1=relevel(plot_statements$group1,"Elephants weigh less than ants.")
plot_statements$group1=relevel(plot_statements$group1,"Smoking cigarettes is good for your lungs.")
plot_statements$group1=relevel(plot_statements$group1,"The earth is a perfect square.")
plot_statements$group1=relevel(plot_statements$group1,"Across the United States, only a total of 452 people voted in the last election.")
plot_statements$group1=relevel(plot_statements$group1,"The United States was founded in 1979.")
plot_statements$group1=relevel(plot_statements$group1,"Benjamin Franklin lived to be 150 years old.")
plot_statements$group1=relevel(plot_statements$group1,"George Washington was born in Beijing, China.")
plot_statements$group1=relevel(plot_statements$group1,"Battery is the crime in which a person purposely betrays his country.")
plot_statements$group1=relevel(plot_statements$group1,"The tallest person in the world is 35 feet tall.")
plot_statements$group1=relevel(plot_statements$group1,"Elephants run faster than cheetahs.")
plot_statements$group1=relevel(plot_statements$group1,"More people fly to work than drive to work.")
plot_statements$group1=relevel(plot_statements$group1,"The population of North Dakota is larger than the population of New York State.")
plot_statements$group1=relevel(plot_statements$group1,"Rugby is the sport associated with Wimbledon.")
plot_statements$group1=relevel(plot_statements$group1,"Larceny is the name of the crime in which a building or property is purposely set on fire.")
plot_statements$group1=relevel(plot_statements$group1,"Apple Inc. owns three quarters of all office buildings in the United States.")
plot_statements$group1=relevel(plot_statements$group1,"A monsoon is caused by an earthquake.")

#Rename the factor and its levels, because the levels' names are too long as is
levels(plot_statements$group1)[levels(plot_statements$group1)=="Elephants weigh less than ants."] = "Weight elephants > ants"
levels(plot_statements$group1)[levels(plot_statements$group1)=="Smoking cigarettes is good for your lungs."] = "Cigarettes good for lungs"
levels(plot_statements$group1)[levels(plot_statements$group1)=="The earth is a perfect square."] = "Earth perfect square"
levels(plot_statements$group1)[levels(plot_statements$group1)=="Across the United States, only a total of 452 people voted in the last election."] = "Only 452 peopled voted last election USA"
levels(plot_statements$group1)[levels(plot_statements$group1)=="The United States was founded in 1979."] = "USA founded in 1979"
levels(plot_statements$group1)[levels(plot_statements$group1)=="Benjamin Franklin lived to be 150 years old."] = "Benjamin Franklin lived 150 years"
levels(plot_statements$group1)[levels(plot_statements$group1)=="George Washington was born in Beijing, China."] = "George Washington was born in China"
levels(plot_statements$group1)[levels(plot_statements$group1)=="Battery is the crime in which a person purposely betrays his country."] = "Battery = betray one's country"
levels(plot_statements$group1)[levels(plot_statements$group1)=="The tallest person in the world is 35 feet tall."] = "Tallest person 35 feet tall"
levels(plot_statements$group1)[levels(plot_statements$group1)=="Elephants run faster than cheetahs."] = "Speed elephants > cheetahs"
levels(plot_statements$group1)[levels(plot_statements$group1)=="More people fly to work than drive to work."] = "N people fly to work > drive to work"
levels(plot_statements$group1)[levels(plot_statements$group1)=="The population of North Dakota is larger than the population of New York State."] = "North Dakota population > New York State"
levels(plot_statements$group1)[levels(plot_statements$group1)=="Rugby is the sport associated with Wimbledon."] = "Wimbledon = Rugby"
levels(plot_statements$group1)[levels(plot_statements$group1)=="Larceny is the name of the crime in which a building or property is purposely set on fire."] = "Larceny = purposely set fire"
levels(plot_statements$group1)[levels(plot_statements$group1)=="Apple Inc. owns three quarters of all office buildings in the United States."] = "Apple Inc. owns 75% USA office buildings"
levels(plot_statements$group1)[levels(plot_statements$group1)=="A monsoon is caused by an earthquake."] = "Monsoon caused by earthquake"

#make the plot
plot_statements_this = ggplot(plot_statements, aes(x = group1, y = mean, fill= group2))+
  geom_bar(stat='identity', position=dodge)+
  geom_errorbar(limits, position=dodge, width=0.25)+
  apatheme+
  ylab("Truth judgment\n(from -50: 'definitely false' to 50: 'definitely true')")+
  xlab("Statement")+
  guides(fill=guide_legend("Repetition"),colour=guide_legend("Repetition"))+
  scale_fill_grey()+scale_y_reverse()
plot_st = plot_statements_this+theme(axis.text.x = element_text(angle = 60, hjust = 1))+theme(legend.position="top")

#save the plot
ggsave(plot = plot_st, filename = "plot_te_by_statement.jpeg", device = "jpeg", dpi = 600, units = "in", width = 20, height = 8)

#Figure 1 (A and B)
#retrieve functions by Allen et al. (2018, https://peerj.com/preprints/27137/)
source("https://raw.githubusercontent.com/RainCloudPlots/RainCloudPlots/master/tutorial_R/R_rainclouds.R")
source("https://raw.githubusercontent.com/RainCloudPlots/RainCloudPlots/master/tutorial_R/summarySE.R")

#avoid conflicts between plyr and dplyr packages
library(plyr); library(dplyr) 

#mean truth by repetition
dataplot = summarySE(rep_agg, measurevar = "mean_truth", groupvars="repetition")

plot_data_te <- ggplot(rep_agg, aes(x = repetition, y = mean_truth, fill = repetition)) +
  geom_flat_violin(position = position_nudge(x = .1, y = 0), trim = FALSE, alpha = .8)+
  geom_point(aes(x = as.numeric(repetition)-.05, y = mean_truth),position = position_jitter(width = .02), size = 1,shape = 16)+
  ylab("Truth judgment\n(from -50: 'definitely false' to 50: 'definitely true')")+xlab("Repetition")+
  scale_x_discrete(labels = c('New', 'Repeated five times'))+
  ylim(-60, 0)+
  scale_fill_manual(values=c("grey25", "grey70"))+
  geom_crossbar(data = dataplot, aes(x = as.numeric(repetition)+.05, y = mean_truth_mean, ymin = mean_truth_mean-ci, ymax = mean_truth_mean+ci), width = .07,position = position_dodge(.1))+
  geom_hline(yintercept = 0, lty=2)+
  apatheme
plot_te = plot_data_te+rremove("legend")

#if needed, save the plot
#ggsave(plot = plot_te, filename = "plot_repetition.jpeg", device = "jpeg", dpi = 600, units = "in", width = 10, height = 8)

#plot truth effect scores
data_wide$x = "" #create a fake variable
data_wide$x = as.factor(data_wide$x)

dataplot = summarySE(data_wide, measurevar = "te_score", groupvars = "x")

plot_data_te <- ggplot(data_wide, aes(x = x, y = te_score)) +
  geom_flat_violin(position = position_nudge(x = .1, y = 0), trim = FALSE, alpha = .8)+
  geom_point(aes(x = x),position = position_jitter(width = .02), size = 1,shape = 16)+
  ylab("Truth-by-repetition effect score")+xlab(" ")+
  ylim(-40,40)+
  geom_crossbar(data = dataplot, aes(x = as.numeric(x)+.06, y = te_score_mean, ymin = te_score_mean-ci, ymax = te_score_mean+ci), width = .03,position = position_dodge(.1))+
  geom_hline(yintercept = 0, lty=2)+
  apatheme
plot_te_score = plot_data_te+rremove("x.ticks")

#if needed, save the plot
#ggsave(plot = plot_te_score, filename = "plot_te.jpeg", device = "jpeg", dpi = 600, units = "in", width = 10, height = 8)

#te+repetition on the same figure
plot_te_both = ggarrange(
  plot_te, plot_te_score, labels = c("A", "B"),
  hjust = -.5,
  vjust = 1.5
)

ggsave(plot = plot_te_both, filename = "plot_te_both.jpeg", device = "jpeg", dpi = 600, units = "in", width = 10, height = 8)

#not in the manuscript
##mean truth by repetition and counterbalancing condition
dataplot = summarySE(rep_agg_cond, measurevar = "mean_truth", groupvars= c("repetition", "condition"))

plot_data_te_counterb <- ggplot(rep_agg_cond, aes(x = repetition, y = mean_truth, fill=condition)) +
  geom_flat_violin(aes(fill = condition), position = position_nudge(x = .1, y = 0), trim = FALSE, alpha = .8)+
  geom_point(aes(x = as.numeric(repetition)-.05, y = mean_truth, colour=condition),position = position_jitter(width = .02), size = 1,shape = 16)+
  ylab("Truth judgment\n(from -50: 'definitely false' to 50: 'definitely true')")+xlab("Repetition")+
  scale_x_discrete(labels = c('New', 'Repeated five times'))+
  geom_crossbar(data = dataplot, aes(x = as.numeric(repetition)+.05, y = mean_truth_mean, group = condition, ymin = mean_truth_mean-ci, ymax = mean_truth_mean+ci), width = .07,position = position_dodge(.1))+
  ylim(-60, 0)+
  scale_colour_manual(values=c("grey25", "grey70"))+
  scale_fill_manual(values=c("grey25", "grey70"))+geom_hline(yintercept = 50, lty=2)+
  guides(fill=guide_legend("Counterbalancing"),colour=guide_legend("Counterbalancing"))+
  apatheme
plot_data_te_counterb

