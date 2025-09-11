// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-home",
          title: "Home",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/index.html";
          },
        },{id: "nav-inspiration-shelf",
          title: "🤓 Inspiration Shelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/inspiration-shelf/";
          },
        },{id: "nav-shower-thoughts",
          title: "🚿 Shower Thoughts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/shower-thoughts/";
          },
        },{id: "nav-about-me",
          title: "👋 About Me",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "post-thoughts-on-subliminal-learning-from-anthropic-team",
        
          title: "Thoughts on Subliminal Learning from Anthropic team",
        
        description: "Yesterday I came across a blog post from the Anthropic team about transmitting hidden data without explicitly distilling it to the student. This is called subliminal learning. In this post, I share my thoughts on this topic and its implications.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/subliminal-learning.html";
          
        },
      },{id: "post-icml-2025-top-50-papers-that-might-shape-the-future-of-ml-according-to-gemini",
        
          title: "ICML 2025 top 50 Papers That Might Shape the Future of ML —...",
        
        description: "Each year, hundreds of papers flood top conferences like ICML. But unless you&#39;re a specialist in every subfield, it&#39;s tough to tell what really matters, or what might matter six months from now.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/icml-2025-top-papers.html";
          
        },
      },{id: "post-i-can-speak-toronto-pretraining-a-trajectory-foundation-model",
        
          title: "I can speak Toronto: Pretraining a Trajectory Foundation Model",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/trajectory-foundation-model.html";
          
        },
      },{id: "post-jaywalking-i-the-description",
        
          title: "Jaywalking I: The Description",
        
        description: "Jaywalking and its impact on traffic flow: An exploration of optimization and urban planning. Is there an optimal jaywalking ratio for better traffic management?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/optimization/jay-walking-1.html";
          
        },
      },{id: "post-chatgpt-internal-library-ace-tools",
        
          title: "ChatGPT Internal Library: Ace Tools",
        
        description: "Exploring the security risks associated with using ChatGPT-generated code that references OpenAI&#39;s internal library &#39;ace_tools&#39;.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/security/chat-gpt-internal-lib-ace-tools.html";
          
        },
      },{id: "post-confirmation-bias",
        
          title: "Confirmation Bias",
        
        description: "Exploring the concept of confirmation bias, its impact on decision-making, and strategies to mitigate its effects in research and everyday life.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/cognitive-science/confirmation-bias.html";
          
        },
      },{id: "post-neurips-2024-forgetting-unlearning-is-hard",
        
          title: "NeurIPS 2024: Forgetting/Unlearning is hard!",
        
        description: "Reflecting on the challenges of machine unlearning discussed at NeurIPS 2024 and the intricate relationship between memorization and generalization in AI.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/challenges-of-machine-unlearning.html";
          
        },
      },{id: "post-hidden-state-visualization-of-llama-and-smollm-models",
        
          title: "Hidden State Visualization of Llama and SmolLM Models",
        
        description: "Visualizing the hidden states of Llama and SmolLM language models to understand their token prediction capabilities.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/hidden-state-visualization.html";
          
        },
      },{id: "post-introducing-h3xplorer-a-hexagonal-map-visualization-tool",
        
          title: "Introducing H3xplorer - A Hexagonal Map Visualization Tool",
        
        description: "H3xplorer is an online tool for creating and exploring hexagonal maps using Uber&#39;s H3 system, designed for geospatial analysis and visualization.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/visualization/h3xplorer.html";
          
        },
      },{id: "post-machine-unlearning-ai-and-the-art-of-forgetting",
        
          title: "Machine Unlearning: AI and the Art of Forgetting",
        
        description: "Exploring the concept of machine unlearning in artificial intelligence and its implications for data privacy and ethical AI.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/machine-unlearning.html";
          
        },
      },{id: "post-teaching-programming-beyond-syntax-a-holistic-approach",
        
          title: "Teaching Programming Beyond Syntax: A Holistic Approach",
        
        description: "Rethinking how programming is taught by focusing on concepts and problem-solving rather than just syntax.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/programming/how-to-learn-programming.htm";
          
        },
      },{id: "post-right-to-be-forgotten-is-it-possible",
        
          title: "Right To Be Forgotten, Is It Possible?",
        
        description: "Exploring the concept of the right to be forgotten in the context of machine learning and data privacy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/right-to-be-forgotten.htm";
          
        },
      },{id: "post-pi-day",
        
          title: "PI Day",
        
        description: "Are you ready to cut into some π (Pi) facts that are both tasty and educational? Let us dive into the world of Pi, which has no end.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/math/Pi-day.html";
          
        },
      },{id: "post-training-data-poisoning-to-get-what-you-want-in-llms-a-question",
        
          title: "Training data poisoning to get what you want in LLMs, A Question",
        
        description: "Exploring the concept of training data poisoning in Large Language Models (LLMs) to manipulate their responses.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/llms/training-data-poisoning.html";
          
        },
      },{id: "post-hey-julia",
        
          title: "Hey Julia",
        
        description: "Exploring the Julia programming language",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/julia/hey-julia.html";
          
        },
      },{id: "post-corona-product-in-the-networkx-python-library",
        
          title: "Corona product in the networkx python library.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/python/networkx/corona-product.html";
          
        },
      },{id: "post-paper-free-semester",
        
          title: "Paper-free semester",
        
        description: "I am going to write about how to have a paper-free semester.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/environment/paper-free-semester.html";
          
        },
      },{id: "post-bloom-39-s-taxonomy-for-mathematics",
        
          title: "Bloom&#39;s Taxonomy for Mathematics",
        
        description: "We are going to review a short but interesting description of Bloom&#39;s Taxonomy in Mathematics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/math/tool/bloom-taxonomy.html";
          
        },
      },{id: "post-corona-product-in-graph-theory",
        
          title: "Corona Product in Graph Theory",
        
        description: "In this post, we are going to know about Corona Product in graph theory",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/math/graph-theory/corona-product.html";
          
        },
      },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%69@%66%61%72%61%6A%69.%69%6E%66%6F", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alifa98", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alifaraji98", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2439-8493", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("//feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HUGFaVAAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/AliFaraji312230", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://faraji.info/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
