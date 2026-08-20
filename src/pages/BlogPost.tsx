import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Phone, MessageCircle, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/siteData';
import { siteConfig } from '../data/siteData';

const blogContent: Record<string, string> = {
  "how-to-quit-alcohol-naturally": `
## Understanding Alcohol Addiction

Alcohol addiction, also known as Alcohol Use Disorder (AUD), is a chronic disease that affects millions of people worldwide. It's characterized by an inability to control alcohol consumption despite negative consequences.

### Signs You May Need Help

- Unable to limit the amount you drink
- Strong cravings for alcohol
- Developing tolerance (needing more to feel the same effect)
- Experiencing withdrawal symptoms when not drinking
- Neglecting responsibilities and relationships

### Professional Treatment Options

1. **Medical Detoxification** - Supervised withdrawal management
2. **Inpatient Rehabilitation** - Structured residential treatment
3. **Outpatient Programs** - Flexible treatment while living at home
4. **Counseling & Therapy** - Addressing underlying issues
5. **Support Groups** - Peer support for recovery

### Natural Approaches to Support Recovery

While professional help is essential, these natural approaches can support your recovery:

- Regular exercise to reduce stress and cravings
- Mindfulness and meditation practices
- Healthy nutrition to restore physical health
- Adequate sleep for mental clarity
- Building a strong support network

### Getting Help

If you or a loved one is struggling with alcohol addiction, professional help is available. At Shree Ram Nasha Mukti Kendra, we provide comprehensive alcohol addiction treatment with compassion and expertise.

**Contact us today at ${siteConfig.phone} for a confidential consultation.**
  `,
  "drug-addiction-effects-on-family": `
## How Drug Addiction Affects Families

Drug addiction doesn't just affect the individual—it impacts the entire family system. Understanding these effects is crucial for healing and recovery.

### Emotional Impact on Family Members

- **Trust Issues**: Broken promises and lies damage family trust
- **Anxiety & Fear**: Constant worry about the loved one's safety
- **Guilt & Shame**: Family members may blame themselves
- **Anger & Resentment**: Feelings of betrayal and frustration
- **Depression**: Watching a loved one struggle takes an emotional toll

### Financial Consequences

Drug addiction often leads to financial strain on families:

- Money spent on drugs instead of necessities
- Legal fees and medical bills
- Lost income due to missed work
- Theft from family members to fund addiction

### Impact on Children

Children in families affected by addiction may experience:

- Emotional and behavioral problems
- Academic difficulties
- Higher risk of substance abuse themselves
- Trauma and attachment issues

### How Family Therapy Helps

Family therapy is a crucial component of addiction treatment:

1. **Improves Communication**: Learn healthy ways to express feelings
2. **Rebuilds Trust**: Work together toward repairing relationships
3. **Sets Boundaries**: Establish healthy boundaries and expectations
4. **Educates Families**: Understand addiction as a disease
5. **Supports Recovery**: Create a supportive environment for lasting change

### Getting Help

At Shree Ram Nasha Mukti Kendra, we offer comprehensive family counseling services as part of our addiction treatment programs.

**Call ${siteConfig.phone} to learn more about how we can help your family heal.**
  `,
};

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    "Hello! I read your blog post and would like more information."
  );

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const content = blogContent[slug] || `
## ${post.title}

${post.excerpt}

This article explores important aspects of ${post.category.toLowerCase()} and provides valuable insights for those seeking help.

### Understanding the Issue

Addiction is a complex disease that affects both the brain and behavior. It requires comprehensive treatment that addresses the physical, psychological, and emotional aspects of dependency.

### Seeking Help

Professional treatment is the most effective way to overcome addiction. At Shree Ram Nasha Mukti Kendra, we provide evidence-based treatment with compassion and expertise.

**Contact us at ${siteConfig.phone} for a confidential consultation.**
  `;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full">{post.category}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
              />

              <div className="prose prose-lg max-w-none">
                {content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-poppins font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-poppins font-semibold text-gray-900 mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-semibold text-gray-800 my-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-gray-600 ml-4 my-1">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  } else if (paragraph.match(/^\d+\./)) {
                    return (
                      <li key={index} className="text-gray-600 ml-4 my-1 list-decimal">
                        {paragraph.replace(/^\d+\.\s*/, '')}
                      </li>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-600 my-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 p-6 bg-primary-50 rounded-2xl">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  Need Help?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you or someone you love is struggling with addiction, we're here to help 24/7.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={`tel:${siteConfig.phone}`} className="btn-primary text-sm">
                    <Phone className="w-4 h-4" />
                    Call {siteConfig.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-40">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      to={`/blog/${relatedPost.slug}`}
                      className="block bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all"
                    >
                      <div className="text-xs text-primary-500 font-medium mb-1">
                        {relatedPost.category}
                      </div>
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPost;
